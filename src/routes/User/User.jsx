import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import React, { useState } from "react";
import "./User.scss";
import Title from "../../components/Title/Title";
import Text from "../../components/Text/Text";
import H3 from "../../components/H3/H3";
import { useSelector } from 'react-redux';
import EditUsernameForm from "../../components/EditUsernameForm/EditUsernameForm";

const User = () => {
   const user = useSelector(state => state.auth.user);
    const [isEditing, setIsEditing] = useState(false);
  

  return (
  <div>
    <Header />
    <main className="main bg-dark">
      <div className="header">
        <Title text="Welcome back" />
        <Title text={`${user.firstName} ${user.lastName}`} />
           {!isEditing ? (
            <>
              <Title text={user.userName} />
              <Button className="edit-button" onClick={() => setIsEditing(true)}>
                Edit user infos
              </Button>
            </>
          ) : (
            <>
              <EditUsernameForm onSaveSuccess={() => setIsEditing(false)} onCancel={() => setIsEditing(false)} />
              
            </>
          )}
      </div>
      <section className="account">
        <div className="account-content-wrapper">
          <H3 className="account-title">Argent Bank Checking (x8349)</H3> 
          <Text className="account-amount" text="$2,082.79"/>
          <Text className="account-amount-description" text="Available Balance"/>
        </div>
        <div className="account-content-wrapper cta">
          <Button className="transaction-button" >
          View transactions
        </Button>
        </div>
      </section>
        <section className="account">
        <div className="account-content-wrapper">
          <H3 className="account-title">Argent Bank Savings (x6712) </H3> 
          <Text className="account-amount" text="$10,928.42"/>
          <Text className="account-amount-description" text="Available Balance"/>
        </div>
        <div className="account-content-wrapper cta">
          <Button className="transaction-button" >
          View transactions
        </Button>
        </div>
      </section>
        <section className="account">
        <div className="account-content-wrapper">
          <H3 className="account-title">Argent Bank Credit Card (x8349)</H3> 
          <Text className="account-amount" text="$184.30"/>
          <Text className="account-amount-description" text="Current Balance"/>
        </div>
        <div className="account-content-wrapper cta">
          <Button className="transaction-button" >
          View transactions
        </Button>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);
};
export default User;
