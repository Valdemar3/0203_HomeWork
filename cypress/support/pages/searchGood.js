export function searchGood(nameOfGood) {
    cy.get('mat-grid-list.mat-grid-list').then(matGridList => {
        if(matGridList.find(`div[class="item-name"]:contains("${nameOfGood.goodName}")`).length > 0) {
            
        }
        
        
        //cy.wrap(matGridList).find('div[class="item-name"]:contains("Apple J")')
      })
}