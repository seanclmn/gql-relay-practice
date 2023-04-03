import React, { Suspense, useEffect } from "react";
import {View} from 'react-native'
import { Card,Props,Text } from "react-native-paper";
import { DetailViewQuery, DetailViewQuery$data } from "./__generated__/DetailViewQuery.graphql";
import { graphql } from "relay-runtime";
import { PreloadedQuery, useLazyLoadQuery, usePreloadedQuery, useQueryLoader } from "react-relay";
import { Loading } from "./Loading";
import environment from "../../environment";

interface PropsType {
  id: string
}

interface ContentProps {
  queryReference: PreloadedQuery<DetailViewQuery>
}

const detailViewQuery = graphql`
  query DetailViewQuery($filmID: ID!) {
    film(filmID: $filmID) {
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
`

const Content = ({queryReference}: ContentProps) => {
  if(!queryReference) return( <Loading/>)
  const film = usePreloadedQuery<DetailViewQuery>(detailViewQuery, queryReference).film;
  const characters = film?.characterConnection?.characters?.map((character)=>character?.name)

  return(
    <Suspense fallback={<Loading/>}>
      <Card.Content>
        <Text variant="bodyMedium">Release date: {film?.releaseDate}</Text>
        <Text variant="bodyMedium">Director: {film?.director}</Text>
        <Text variant="bodyMedium">Producers: {film?.producers}</Text>
        <Text variant="bodyMedium">Characters: { characters?.join(', ')} </Text>
      </Card.Content>   
    </Suspense>    
  )
}

const DetailView = ({id}: PropsType) => {
  const [queryReference, loadQuery, disposeQuery] = useQueryLoader<DetailViewQuery>(detailViewQuery);
  useEffect(() => {
    loadQuery({filmID: id});
    return () => disposeQuery();
  }, []);
  
  return(
    <View>
      <Suspense fallback={<Loading/>}>
        <Content queryReference={queryReference!}/>
      </Suspense>    
    </View>
  )
}

export default DetailView