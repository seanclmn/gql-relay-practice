import { graphql } from "relay-runtime"
import { Pressable, ScrollView, View } from "react-native"
import { ListQuery } from "./__generated__/ListQuery.graphql"
import { usePreloadedQuery, PreloadedQuery, useQueryLoader,} from 'react-relay/hooks'
import { Card, Text } from 'react-native-paper';
import { Suspense, useEffect, useState } from "react"
import {Loading} from '../components/Loading'


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

const FilmLink = ({films: data}: ListQuery["response"]["allFilms"]["films"]) => {
  const [open,setOpen]=useState(false)
  const characters = data.characterConnection.characters.map((character)=>character.name)
  
  return(
    <View>
      <Pressable onPress={()=>setOpen((bool)=>!bool)}>
        <Card style ={{paddingBottom: 10}}>
          <Card.Title title={data.title} />
          <Card.Content>
            <Text variant="bodyMedium">Episode {data.episodeID}</Text>
          </Card.Content>
          {
            open && 
              <Card.Content>
                <Text variant="bodyMedium">Release date: {data.releaseDate}</Text>
                <Text variant="bodyMedium">Director: {data.director}</Text>
                <Text variant="bodyMedium">Producers: {data.producers}</Text>
                <Text variant="bodyMedium">Characters: { characters.join(', ')} </Text>
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
  return(
    <Suspense fallback={<Loading/>}>
      <Content queryReference={queryReference!}/>
    </Suspense>
  )
}

export const Content = ({queryReference}:ContentProps) => {
  if(!queryReference) return( <Loading/>)
  const data = usePreloadedQuery<ListQuery>(query, queryReference);

  return(
    <ScrollView style={{width: "100%",marginTop: 100}}>
      {data.allFilms?.films!.map((elem)=>
        <View key={elem?.id} style={{marginTop: 10}}>
          <Suspense fallback={<Loading/>}>
            <FilmLink films={elem}/>
          </Suspense>
        </View>)
      }
    </ScrollView>
  )
}
