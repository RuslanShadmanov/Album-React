import logo from './logo.svg';
import React from 'react';
import './App.css';
import { render } from '@testing-library/react';
import { Album } from './components/Album';
import { Header } from './components/Header';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      data:[
        {
          albumName: "Family Photos",
          id: 1,
          description:
            "A collection of beautiful moments with our loved ones. Capturing the essence of family bonds and joyous occasions.",
          pictures: [
            {
              albumId: 1,
              id: 1,
              title: "Summer Vacation in the Mountains",
              url: "https://via.placeholder.com/600/92c952",
              thumbnailUrl: "https://via.placeholder.com/150/92c952",
            },
            {
              albumId: 1,
              id: 2,
              title: "Exploring the Coastal Beauty",
              url: "https://via.placeholder.com/600/771796",
              thumbnailUrl: "https://via.placeholder.com/150/771796",
            },
            {
              albumId: 1,
              id: 3,
              title: "Garden Picnic with Family",
              url: "https://via.placeholder.com/600/24f355",
              thumbnailUrl: "https://via.placeholder.com/150/24f355",
            },
            {
              albumId: 1,
              id: 4,
              title: "Celebrating Special Occasions",
              url: "https://via.placeholder.com/600/d32776",
              thumbnailUrl: "https://via.placeholder.com/150/d32776",
            },
          ],
        },
        {
          albumName: "family reunion",
          id: 2,
          description:
            "A journey through the adventures and camaraderie shared with our dearest friends. Cherishing moments of laughter and friendship.",
          pictures: [
            {
              albumId: 2,
              id: 52,
              title: "Hiking Trails with Friends",
              url: "https://via.placeholder.com/600/121fa4",
              thumbnailUrl: "https://via.placeholder.com/150/121fa4",
            },
            {
              albumId: 2,
              id: 53,
              title: "Beach Bonfire Nights",
              url: "https://via.placeholder.com/600/6efc5f",
              thumbnailUrl: "https://via.placeholder.com/150/6efc5f",
            },
            {
              albumId: 2,
              id: 54,
              title: "Cityscape Adventures",
              url: "https://via.placeholder.com/600/aa8f2e",
              thumbnailUrl: "https://via.placeholder.com/150/aa8f2e",
            },
            {
              albumId: 2,
              id: 55,
              title: "Memorable Road Trips",
              url: "https://via.placeholder.com/600/5e04a4",
              thumbnailUrl: "https://via.placeholder.com/150/5e04a4",
            },
          ],
        },
        {
          albumName: "Work",
          id: 3,
          description:
            "A glimpse into our professional journey, showcasing dedication and achievements. Capturing moments of hard work and success.",
          pictures: [
            {
              albumId: 3,
              id: 127,
              title: "Team Building Retreat",
              url: "https://via.placeholder.com/600/74456b",
              thumbnailUrl: "https://via.placeholder.com/150/74456b",
            },
            {
              albumId: 3,
              id: 128,
              title: "Project Milestone Celebration",
              url: "https://via.placeholder.com/600/b0931d",
              thumbnailUrl: "https://via.placeholder.com/150/b0931d",
            },
            {
              albumId: 3,
              id: 129,
              title: "Collaborative Workspace",
              url: "https://via.placeholder.com/600/5efeca",
              thumbnailUrl: "https://via.placeholder.com/150/5efeca",
            },
            {
              albumId: 3,
              id: 130,
              title: "Innovation and Teamwork",
              url: "https://via.placeholder.com/600/89afb1",
              thumbnailUrl: "https://via.placeholder.com/150/89afb1",
            },
          ],
        },
      ],
      isShowAlbums: true,
    };
  }
deleteAlbum =(id)=>{
  const filteredAlbums = this.state.data.filter((album)=>(album.id!==id))
  this.setState({data:filteredAlbums})
}
    renderAlbums = ()=>{
      this.setState({isShowAlbums: !this.state.isShowAlbums})
    }

  render() {
    const {data,isShowAlbums}=this.state;
    const numOfPics=data.reduce((accum,current)=>{
      return accum+=current.pictures.length;

    },0)
    
  return (
    <div>
      <Header numOfAlbum={data.length} numOfPics={numOfPics}
      renderAlbums = {this.renderAlbums}
      isShowAlbums={isShowAlbums}/>
      {isShowAlbums ? data.map((singleAlbum)=>{
        return <Album {...singleAlbum}
        deleteAlbum={this.deleteAlbum}
        key={singleAlbum.id}/>;
      }):null
      }
    </div>
  )
    }
  }
  
  export default App;


