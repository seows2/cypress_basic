describe("counter test", () => {
    beforeEach(() => {
        cy.visit("http://localhost:5500/")
    })

    it("생성시 버튼과 초기값(10)을 렌더링 한다.", () => {
        cy.get(".minus-button");
        cy.get(".plus-button");

        cy.get(".count-display").should("have.value", "10");
    });
    it("+ 버튼 클릭시 1 증가한다.", () => {
        cy.get(".plus-button").click();

        cy.get(".count-display").should("have.value", "11");
    });
    it("- 버튼을 클릭 시 count가 1감소한다.", () => {
        cy.get(".minus-button").click();

        cy.get(".count-display").should("have.value", "9");
    });
    it("+ 버튼을 눌렀을 때 count가 12가 넘는 경우 더이상 증가하지 못한다. (Max 값이 12)", () => {
        cy.get(".plus-button").click();
        cy.get(".plus-button").click();
        cy.get(".plus-button").click();

        cy.get(".count-display").should("have.value", "12");
    });
    it("- 버튼을 눌렀을 때 count는 8보다 작아지는 경우 감소하지 못한다. (Min 값이 8)", () => {
        cy.get(".minus-button").click();
        cy.get(".minus-button").click();
        cy.get(".minus-button").click();

        cy.get(".count-display").should("have.value", "8");
    });
});