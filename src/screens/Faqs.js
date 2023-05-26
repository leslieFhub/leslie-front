import React from "react";
import Header from "./../components/Header";

const About = () => {
  return (
    <>
      <Header />
      <div class="container my-5">
        <h1 class="text-center faq-title">Do you have any Questions?</h1>
        <h4 class="faq-header">
          Welcome to our Frequently Asked Questions page. Here, we have compiled a list of the most commonly asked questions by our customers. We hope that this page will provide you with the information you need. If you have any additional questions, please feel free to contact us.
        </h4>
      


      <div class="accordion" id="faqAccordion">
        <div class="card">
          <div class="card-header" id="question1">
            <h2 class="mb-0">
              <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#answer1" aria-expanded="true" aria-controls="answer1">
                <b>Do you deliver every day?</b>
              </button>
            </h2>
          </div>
          <div id="answer1" class="collapse show" aria-labelledby="question1" data-parent="#faqAccordion">
            <div class="card-body">
            Yes, and we're available from <b>1:00 PM to 12:00 AM</b> every day.
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-header" id="question2">
            <h2 class="mb-0">
              <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#answer2" aria-expanded="false" aria-controls="answer2">
                <b>How long is the delivery time?</b>
              </button>
            </h2>
          </div>
          <div id="answer2" class="collapse" aria-labelledby="question2" data-parent="#faqAccordion">
            <div class="card-body">
            Our delivery time varies depending on the customer's order, however it often takes us <b>20 minutes per order</b>.
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-header" id="question3">
            <h2 class="mb-0">
              <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#answer3" aria-expanded="false" aria-controls="answer3">
                <b>Where are you located?</b>
              </button>
            </h2>
          </div>
          <div id="answer3" class="collapse" aria-labelledby="question3" data-parent="#faqAccordion">
            <div class="card-body">
            We are currently located at <b>Masuerte Village, 0710 Saturn, Bacoor, 4102 Cavite.</b>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-header" id="question4">
            <h2 class="mb-0">
              <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#answer4" aria-expanded="false" aria-controls="answer4">
                <b>Are the prices for dine-in same with the prices listed on the website?</b>
              </button>
            </h2>
          </div>
          <div id="answer4" class="collapse" aria-labelledby="question4" data-parent="#faqAccordion">
            <div class="card-body">
            Yes, the rates listed on our website for dine-in orders are the same; however, we charge an additional fee for the tax when you use our website to place an order.
            </div>
          </div>
        </div>

        
        <div class="card">
          <div class="card-header" id="question5">
            <h2 class="mb-0">
              <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#answer5" aria-expanded="false" aria-controls="answer5">
                <b>Can I cancel my order online?</b>
              </button>
            </h2>
          </div>
          <div id="answer5" class="collapse" aria-labelledby="question5" data-parent="#faqAccordion">
            <div class="card-body">
              No, the customers do not have an option to cancel their orders after placing it.
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-header" id="question6">
            <h2 class="mb-0">
              <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#answer6" aria-expanded="false" aria-controls="answer6">
                <b>Can I use my PWD ID for discount?</b>
              </button>
            </h2>
          </div>
          <div id="answer6" class="collapse" aria-labelledby="question6" data-parent="#faqAccordion">
            <div class="card-body">
            Yes, you can use your PWD ID to avail a 10% discount, just show you ID on our delivery riders.
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-header" id="question7">
            <h2 class="mb-0">
              <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#answer7" aria-expanded="false" aria-controls="answer7">
                <b>What is the minimum order quantity for delivery?</b>
              </button>
            </h2>
          </div>
          <div id="answer7" class="collapse" aria-labelledby="question7" data-parent="#faqAccordion">
            <div class="card-body">
            You can only order up to 5 pieces per pizza.
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-header" id="question8">
            <h2 class="mb-0">
              <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#answer8" aria-expanded="false" aria-controls="answer8">
                <b>What are the mode of payment I can use?</b>
              </button>
            </h2>
          </div>
          <div id="answer8" class="collapse" aria-labelledby="question8" data-parent="#faqAccordion">
            <div class="card-body">
              We accept <b>PayPal</b>, <b>Credit Card</b> and <b>Cash</b> as a payment method.
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default About;
