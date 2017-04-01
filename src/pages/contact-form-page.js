import React, { Component } from 'react';
import { Grid} from 'semantic-ui-react';
import ContactForm from '../components/contact-form';
import store from '../stores/contact-store'
import form from '../forms/contact';
import MobxReactFormDevTools from 'mobx-react-form-devtools';

MobxReactFormDevTools.register({
  form
});

MobxReactFormDevTools.select('form');

class ContactFormPage extends Component {
  render() {
    return (
      <div>
        <MobxReactFormDevTools.UI />
        <Grid centered columns={2}>
          <Grid.Column>
            <h1 style={{marginTop:"1em"}}>Add New Contact</h1>
            <ContactForm form={form} store={store}/>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

export default ContactFormPage;
