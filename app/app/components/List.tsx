import { graphql } from "relay-runtime"
import { Pressable, ScrollView, View } from "react-native"
import { ListQuery } from "./__generated__/ListQuery.graphql"
import { usePreloadedQuery, PreloadedQuery, useQueryLoader,} from 'react-relay/hooks'
import { Avatar, Button, Card, Text } from 'react-native-paper';
import environment from "../../environment"
import { Suspense, useEffect, useState } from "react"
import {Loading} from '../components/Loading'
import { atom, useAtom } from 'jotai'


const query = graphql`
  query ListQuery {
    allFilms {
      films {
        episodeID
        title
        id
        releaseDate
        director
        created
        producers
        edited
        characterConnection {
          characters {
            name
          }
        }
      }
    }
  }
`

type ContentProps = {
  queryReference: PreloadedQuery<ListQuery>;
};

const FilmLink = ({filmData}:ListQuery) => {

  const [open,setOpen]=useState(false)

  const characters:string[] = filmData.characterConnection.characters.map((character)=>character.name)
  
  console.log(characters.join())
  return(
    <View>
      <Pressable onPress={()=>setOpen((bool)=>!bool)}>
        <Card>
          <Card.Title title={filmData.title} />
          <Card.Content>
            <Text variant="bodyMedium">Episode {filmData.episodeID}</Text>
          </Card.Content>
          {
            open && 
              <Card.Content>
                <Text variant="bodyMedium">Release date: {filmData.releaseDate}</Text>
                <Text variant="bodyMedium">Director: {filmData.director}</Text>
                <Text variant="bodyMedium">Producers: {filmData.producers}</Text>
                <Text variant="bodyMedium">Characters: { characters.join()} </Text>
              </Card.Content>        
          }
        </Card>

      </Pressable>
    </View>
  )
}

export const List = () => {
  const [queryReference, loadQuery, disposeQuery] = useQueryLoader<ListQuery>(query);
  useEffect(() => {
    loadQuery({});
    return () => disposeQuery();
  }, []);
  if(!queryReference) return( <Text>Loading...</Text>)
  console.log(queryReference);

  return(
    <Suspense fallback={<Loading/>}>
      <Content queryReference={queryReference}/>
    </Suspense>
  )
}

export const Content = ({queryReference}:ContentProps) => {
  if(queryReference===null) return( <Text>Loading...</Text>)
  const data = usePreloadedQuery<ListQuery>(query, queryReference);
  if(!data?.allFilms!.films) return null

  return(
    <ScrollView style={{width: "100%",marginTop: 100}}>
      {data.allFilms.films.map((elem)=>
        <View key={elem.id} style={{marginTop: 10}}>
          <FilmLink filmData={elem}/>
        </View>)
      }
    </ScrollView>
  )
}
