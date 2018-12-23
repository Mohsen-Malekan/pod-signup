import { Container } from "unstated";
import axios from "axios";

class FormContainer extends Container {
  state = {
    tab1: {
      businessName: "",
      guildCode: "",
      username: "",
      email: ""
    },
    tab2: {
      isRegistered: "false",
      registrationNumber: "",
      nationalCode: "",
      sheba: "",
      description: ""
    },
    tab3: {
      firstName: "",
      lastName: "",
      cellphone: "",
      agentNationalCode: "",
      state: "",
      city: "",
      address: ""
    },
    tab4: {
      docs: [{ name: "", file: undefined }],
      logoImage: "",
      coverImage: ""
    }
  };

  setData = (tab, data) => {
    return this.setState({ [tab]: { ...data } });
  };

  reset = () => {
    return this.setState({
      tab1: {
        businessName: "",
        guildCode: "",
        username: "",
        email: ""
      },
      tab2: {
        isRegistered: "false",
        registrationNumber: "",
        nationalCode: "",
        sheba: "",
        description: ""
      },
      tab3: {
        firstName: "",
        lastName: "",
        cellphone: "",
        agentNationalCode: "",
        state: "",
        city: "",
        address: ""
      },
      tab4: {
        docs: [{ name: "", file: undefined }],
        logoImage: "",
        coverImage: ""
      }
    });
  };

  signup = async () => {
    const values = {
      ...this.state.tab1,
      ...this.state.tab2,
      ...this.state.tab3,
      ...this.state.tab4
    };

    values.sheba = values.sheba.slice(2);
    return axios.post("/api/signup", values).then(res => res.data);
  };
}

const container = new FormContainer();
export default container;
