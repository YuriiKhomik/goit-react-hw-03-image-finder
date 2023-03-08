import { Formik } from 'formik';
import { Header, Input, SearchForm, Button, ButtonIcon } from './styled';

const initialValues = {
  search: '',
};

export const Searchbar = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };
  return (
    <Header>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <SearchForm autoComplete="off">
          <Button type="submit" aria-label="search">
            <ButtonIcon size={18} />
          </Button>
          <Input
            type="text"
            name="search"
            placeholder="Search images and photos"
            autoFocus={true}
          />
        </SearchForm>
      </Formik>
    </Header>
  );
};
