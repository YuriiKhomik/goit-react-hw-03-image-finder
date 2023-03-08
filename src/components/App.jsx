import { getImages } from 'services';
import { Searchbar } from './Searchbar';
import { ImageGallery } from './ImageGallery';
import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export class App extends Component {
  state = {
    items: [],
    searchQuery: '',
  };

  nextItems = JSON.stringify(this.state.items);

  async componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.searchQuery;
    const nextQuery = this.state.searchQuery;
    if (nextQuery !== prevQuery) {
      try {
        const items = await getImages(nextQuery, 1);
        this.setState({ items: items.hits });
      } catch (error) {
        console.log(error);
      }
    }
  }

  handleFormSubmit = searchQuery => {
    this.setState({ searchQuery });
  };

  render() {
    const { items } = this.state;
    return (
      <div className="App">
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery items={items} />
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    );
  }
}

// const get = async () => {
//   const images = await getImages();
//   console.log(images);
//   return images;
// };
