const db = require("./models")


const admin = [
    {
        username: "FluffyWalrus",
        password: "yohanShmit11",
        email: "jeffry@gmail.com"

    },
    {
        username: "test",
        password: "test",
        email: "test@test.com"

    }
]

const product = [
    {
      title: "catApp",
      image: 'http://placekitten.com/g/200/300',
      description: `
      \US plane manufacturer Boeing has recommended grounding all of the 777-model aircraft which have the same type of engine that suffered failure and shed debris over Denver on Saturday

      It said 128 jets should be suspended until inspections are carried out
      
      United Airlines and Japans two main operators have already stopped using 56 planes with the same engine.
      
      Flight 328, carrying 231 passengers, was forced to make an emergency landing at Denver airport. No-one was injured.
      
      While an investigation is ongoing, we recommended suspending operations of the 69 in-service and 59 in-storage 777 aircraft powered by Pratt & Whitney 4000-112 engines, the company said in a statement
      
      Pratt & Whitney said it had dispatched a team to work with investigators.
      
      According to the Federal Aviation Administration FAA, United is the only US airline flying this model of 777, with the others being in Japan and South Korea
      
      Korean Air, which has six planes in operation and 10 in storage, said it was awaiting instruction from South Korean regulators regarding any measures for its 777 jets
      
      United Flight 328, bound for Honolulu, suffered a failure in its right-hand engine. Debris from the jet was found scattered over a nearby residential area after it returned to Denver airport`,
      category: "software",
      price: 3400.00,
      quantity: 50,
      tier: "two",
      fetured: true
    },
    {
      title: "coolComp",
      image: 'http://placekitten.com/g/200/300',
      description: `
      \US plane manufacturer Boeing has recommended grounding all of the 777-model aircraft which have the same type of engine that suffered failure and shed debris over Denver on Saturday
       It said 128 jets should be suspended until inspections are carried out
      United Airlines and Japans two main operators have already stopped using 56 planes with the same engine.
      Flight 328, carrying 231 passengers, was forced to make an emergency landing at Denver airport. No-one was injured.
      While an investigation is ongoing, we recommended suspending operations of the 69 in-service and 59 in-storage 777 aircraft powered by Pratt & Whitney 4000-112 engines, the company said in a statement
      Pratt & Whitney said it had dispatched a team to work with investigators.
      According to the Federal Aviation Administration FAA, United is the only US airline flying this model of 777, with the others being in Japan and South Korea
      Korean Air, which has six planes in operation and 10 in storage, said it was awaiting instruction from South Korean regulators regarding any measures for its 777 jets
      United Flight 328, bound for Honolulu, suffered a failure in its right-hand engine. Debris from the jet was found scattered over a nearby residential area after it returned to Denver airport`,
      category: "hardware",
      price: 100.00,
      quantity: 2000,
      tier: "one",
      fetured: true
    }

  ]


  const seed = () => {
      db.Admin.bulkCreate(admin).then(()=>db.Product.bulkCreate(product))
  }

  seed()