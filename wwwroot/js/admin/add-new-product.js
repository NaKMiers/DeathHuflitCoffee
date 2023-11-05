function handleImages() {
   var itemContainer = $('#admin-image-container')
   var itemButton = $('#admin-add-image-btn')

   var lastIndex = itemButton
      .closest('#admin-type-container')
      .find(".form-item:last input[name^='Images']")
   // console.log(lastIndex)

   var itemCounter = 0

   if (lastIndex.length) {
      lastIndex = lastIndex.attr('name').match(/\[(\d+)\]/)[1]
      itemCounter = +lastIndex + 1
   }

   itemButton.click(function () {
      // Tạo các trường input cho Image mới
      var newHtml = `
         <div class="form-item d-flex align-items-center w-100 gap-3 ps-4">
               <button style="max-height: 40px" class="btn btn-danger remove-item mt-2" type="button">Remove</button>
               <div class="form-group mb-3 w-100">
                  <label for="Images[${itemCounter}].Src">Image Source:</label>
                  <input type="url" id="Images[${itemCounter}].Src" name="Images[${itemCounter}].Src" class="form-control" />
               </div>
         </div>
      `

      itemCounter++

      // Thêm Image mới vào container và cập nhật hiển thị
      itemContainer.append(newHtml)

      $('.remove-item').click(function () {
         $(this).closest('.form-item').remove() // Xóa 'form-item' chứa nút xóa được bấm
      })
   })
}

function handleSizes() {
   var itemContainer = $('#admin-size-container')
   var itemButton = $('#admin-add-size-btn')

   var lastIndex = itemButton
      .closest('#admin-type-container')
      .find(".form-item:last input[name^='Sizes']")
   // console.log(lastIndex)

   var itemCounter = 0

   if (lastIndex.length) {
      lastIndex = lastIndex.attr('name').match(/\[(\d+)\]/)[1]
      itemCounter = +lastIndex + 1
   }

   itemButton.click(function () {
      // Tạo các trường input cho Size mới
      var newHtml = `
         <div class="form-item d-flex align-items-center w-100 gap-3 ps-4">
               <button style="max-height: 40px" class="btn btn-danger remove-item mt-2" type="button">Remove</button>
               <div class="form-group mb-3 w-100">
                  <label for="Sizes[${itemCounter}].Label">Size Label:</label>
                  <input type="text" id="Sizes[${itemCounter}].Label" name="Sizes[${itemCounter}].Label" class="form-control" />
               </div>
               <div class="form-group mb-3 w-100">
                  <label for="Sizes[${itemCounter}].Price">Size Price:</label>
                  <input type="number" id="Sizes[${itemCounter}].Price" name="Sizes[${itemCounter}].Price" class="form-control" />
               </div>
               <div class="form-group mb-3 w-100">
                  <label for="Sizes[${itemCounter}].Text">Text:</label>
                  <input type="text" class="form-control" id="Sizes[${itemCounter}].Text" name="Sizes[${itemCounter}].Text"></input>
               </div>
         </div>
      `

      itemCounter++

      // Thêm Size mới vào container và cập nhật hiển thị
      itemContainer.append(newHtml)

      $('.remove-item').click(function () {
         $(this).closest('.form-item').remove() // Xóa 'form-item' chứa nút xóa được bấm
      })
   })
}

function handleFlavorProfiles() {
   var itemContainer = $('#admin-flavor-profile-container')
   var itemButton = $('#admin-add-flavor-profile-btn')

   var lastIndex = itemButton
      .closest('#admin-type-container')
      .find(".form-item:last input[name^='FlavorProfiles']")
   // console.log(lastIndex)

   var itemCounter = 0

   if (lastIndex.length) {
      lastIndex = lastIndex.attr('name').match(/\[(\d+)\]/)[1]
      itemCounter = +lastIndex + 1
   }

   itemButton.click(function () {
      // Tạo các trường input cho FlavorProfile mới
      var newHtml = `
         <div class="form-item d-flex align-items-center w-100 gap-3 ps-4">
            <button style="max-height: 40px" class="btn btn-danger remove-item mt-2" type="button">Remove</button>
            <div class="form-group mb-3 w-100">
               <label for="FlavorProfiles[${itemCounter}].Label">FlavorProfile Label:</label>
               <input type="text" id="FlavorProfiles[${itemCounter}].Label" name="FlavorProfiles[${itemCounter}].Label" class="form-control" />
            </div>
            <div class="form-group mb-3 w-100">
               <label for="FlavorProfiles[${itemCounter}].Text">Text:</label>
               <textarea class="form-control" id="FlavorProfiles[${itemCounter}].Text" name="FlavorProfiles[${itemCounter}].Text"></textarea>
            </div>
         </div>
      `

      itemCounter++

      // Thêm FlavorProfile mới vào container và cập nhật hiển thị
      itemContainer.append(newHtml)

      $('.remove-item').click(function () {
         $(this).closest('.form-item').remove() // Xóa 'form-item' chứa nút xóa được bấm
      })
   })
}

function handleDetails() {
   var itemContainer = $('#admin-detail-container')
   var itemButton = $('#admin-add-detail-btn')

   var lastIndex = itemButton
      .closest('#admin-type-container')
      .find(".form-item:last input[name^='Details']")
   // console.log(lastIndex)

   var itemCounter = 0

   if (lastIndex.length) {
      lastIndex = lastIndex.attr('name').match(/\[(\d+)\]/)[1]
      itemCounter = +lastIndex + 1
   }

   itemButton.click(function () {
      // Tạo các trường input cho Size mới
      var newHtml = `
         <div class="form-item d-flex align-items-center w-100 gap-3 ps-4">
            <button style="max-height: 40px" class="btn btn-danger remove-item mt-2" type="button">Remove</button>
            <div class="form-group mb-3 w-100">
               <label for="Details[${itemCounter}].Label">Detail Label:</label>
               <input type="text" id="Details[${itemCounter}].Label" name="Details[${itemCounter}].Label" class="form-control" />
            </div>
            <div class="form-group mb-3 w-100">
               <label for="Details[${itemCounter}].Text">Detail Text:</label>
               <input type="text" class="form-control" id="Details[${itemCounter}].Text" name="Details[${itemCounter}].Text"></input>
            </div>
         </div>
      `

      itemCounter++

      // Thêm Size mới vào container và cập nhật hiển thị
      itemContainer.append(newHtml)

      $('.remove-item').click(function () {
         $(this).closest('.form-item').remove() // Xóa 'form-item' chứa nút xóa được bấm
      })
   })
}

function handleTypes() {
   var itemContainer = $('#admin-type-container')
   var itemButton = $('#admin-add-type-btn')

   var lastIndex = itemButton
      .closest('#admin-type-container')
      .find(".form-item:last input[name^='Types']")
   // console.log(lastIndex)

   var itemCounter = 0

   if (lastIndex.length) {
      lastIndex = lastIndex.attr('name').match(/\[(\d+)\]/)[1]
      itemCounter = +lastIndex + 1
   }

   itemButton.click(function () {
      // Tạo các trường input cho Size mới
      var newHtml = `
         <div class="form-item d-flex align-items-center w-100 gap-3 ps-4">
            <button style="max-height: 40px" class="btn btn-danger remove-item mt-2" type="button">Remove</button>
            <div class="form-group mb-3 w-100">
               <label for="Types[${itemCounter}].Text">Text:</label>
               <input type="text" class="form-control" id="Types[${itemCounter}].Text" name="Types[${itemCounter}].Text"></input>
            </div>
         </div>
      `

      itemCounter++

      // Thêm Size mới vào container và cập nhật hiển thị
      itemContainer.append(newHtml)

      $('.remove-item').click(function () {
         $(this).closest('.form-item').remove() // Xóa 'form-item' chứa nút xóa được bấm
      })
   })
}

function handleAttributes() {
   var itemContainer = $('#admin-attribute-container')
   var itemButton = $('#admin-add-attribute-btn')

   var lastIndex = itemButton
      .closest('#admin-type-container')
      .find(".form-item:last input[name^='Attributes']")
   // console.log(lastIndex)

   var itemCounter = 0

   if (lastIndex.length) {
      lastIndex = lastIndex.attr('name').match(/\[(\d+)\]/)[1]
      itemCounter = +lastIndex + 1
   }

   itemButton.click(function () {
      // Tạo các trường input cho Size mới
      var newHtml = `
         <div class="form-item d-flex align-items-center w-100 gap-3 ps-4">
            <button style="max-height: 40px" class="btn btn-danger remove-item mt-2" type="button">Remove</button>
            <div class="form-group mb-3 w-100">
               <label for="Attributes[${itemCounter}].Label">Attribute Label:</label>
               <input type="text" class="form-control" id="Attributes[${itemCounter}].Label" name="Attributes[${itemCounter}].Label"/>
            </div>
            <div class="form-group mb-3 w-100">
               <label for="Attributes[${itemCounter}].MinLabel">Attribute Min Label:</label>
               <input type="text" class="form-control" id="Attributes[${itemCounter}].MinLabel" name="Attributes[${itemCounter}].MinLabel"/>
            </div>
            <div class="form-group mb-3 w-100">
               <label for="Attributes[${itemCounter}].MaxLabel">Attribute Max Label:</label>
               <input type="text" class="form-control" id="Attributes[${itemCounter}].MaxLabel" name="Attributes[${itemCounter}].MaxLabel"/>
            </div>
            <div class="form-group mb-3 w-100">
               <label for="Attributes[${itemCounter}].Value">Attribute Value:</label>
               <input type="number" class="form-control" id="Attributes[${itemCounter}].Value" name="Attributes[${itemCounter}].Value" min="0" max="100"/>
            </div>
         </div>
      `

      itemCounter++

      // Thêm Size mới vào container và cập nhật hiển thị
      itemContainer.append(newHtml)

      $('.remove-item').click(function () {
         $(this).closest('.form-item').remove() // Xóa 'form-item' chứa nút xóa được bấm
      })
   })
}

function handleInsideTypes() {
   var itemContainer = $('#admin-inside-type-container')
   var itemButton = $('#admin-add-inside-type-btn')

   var lastIndex = itemButton
      .closest('#admin-type-container')
      .find(".form-item:last input[name^='InsideTypes']")
   // console.log(lastIndex)

   var itemCounter = 0

   if (lastIndex.length) {
      lastIndex = lastIndex.attr('name').match(/\[(\d+)\]/)[1]
      itemCounter = +lastIndex + 1
   }

   itemButton.click(function () {
      // Tạo các trường input cho Size mới
      var newHtml = `
         <div class="form-item d-flex align-items-center w-100 gap-3 ps-4">
            <button style="max-height: 40px" class="btn btn-danger remove-item mt-2" type="button">Remove</button>
            <div class="form-group mb-3 w-100">
               <label for="InsideTypes[${itemCounter}].Label">Inside Type Label:</label>
               <input type="text" class="form-control" id="InsideTypes[${itemCounter}].Label" name="InsideTypes[${itemCounter}].Label"/>
            </div>
            <div class="form-group mb-3 w-100">
               <label for="InsideTypes[${itemCounter}].Icon">Inside Type Icon:</label>
               <select class="form-select" id="InsideTypes[${itemCounter}].Icon" name="InsideTypes[${itemCounter}].Icon">
                  <option value="1">Icon 1</option>
                  <option value="2">Icon 2</option>
                  <option value="3">Icon 3</option>
               </select>
            </div>
         </div>
      `

      itemCounter++

      // Thêm Size mới vào container và cập nhật hiển thị
      itemContainer.append(newHtml)

      $('.remove-item').click(function () {
         $(this).closest('.form-item').remove() // Xóa 'form-item' chứa nút xóa được bấm
      })
   })
}

function handleSymbols() {
   var itemContainer = $('#admin-symbol-container')
   var itemButton = $('#admin-add-symbol-btn')

   var lastIndex = itemButton
      .closest('#admin-type-container')
      .find(".form-item:last input[name^='Symbols']")
   // console.log(lastIndex)

   var itemCounter = 0

   if (lastIndex.length) {
      lastIndex = lastIndex.attr('name').match(/\[(\d+)\]/)[1]
      itemCounter = +lastIndex + 1
   }

   itemButton.click(function () {
      // Tạo các trường input cho Size mới
      var newHtml = `
         <div class="form-item d-flex align-items-center w-100 gap-3 ps-4">
            <button style="max-height: 40px" class="btn btn-danger remove-item mt-2" type="button">Remove</button>
            <div class="form-group mb-3 w-100">
               <label for="Symbols[${itemCounter}].Title">Symbol Title:</label>
               <input type="text" class="form-control" id="Symbols[${itemCounter}].Title" name="Symbols[${itemCounter}].Title"/>
            </div>
            <div class="form-group mb-3 w-100">
               <label for="Symbols[${itemCounter}].Value">Symbol Icon:</label>
               <select class="form-select" id="Symbols[${itemCounter}].Icon" name="Symbols[${itemCounter}].Icon">
                  <option value="1">Icon 1</option>
                  <option value="2">Icon 2</option>
                  <option value="3">Icon 3</option>
               </select>
            </div>
         </div>
      `

      itemCounter++

      // Thêm Size mới vào container và cập nhật hiển thị
      itemContainer.append(newHtml)

      $('.remove-item').click(function () {
         $(this).closest('.form-item').remove() // Xóa 'form-item' chứa nút xóa được bấm
      })
   })
}

function handleFormats() {
   var itemContainer = $('#admin-format-container')
   var itemButton = $('#admin-add-format-btn')

   var lastIndex = itemButton
      .closest('#admin-type-container')
      .find(".form-item:last input[name^='Formats']")
   // console.log(lastIndex)

   var itemCounter = 0

   if (lastIndex.length) {
      lastIndex = lastIndex.attr('name').match(/\[(\d+)\]/)[1]
      itemCounter = +lastIndex + 1
   }

   itemButton.click(function () {
      // Tạo các trường input cho Size mới
      var newHtml = `
         <div class="form-item d-flex align-items-center w-100 gap-3 ps-4">
            <button style="max-height: 40px" class="btn btn-danger remove-item mt-2" type="button">Remove</button>
            <div class="form-group mb-3 w-100">
               <label for="Formats[${itemCounter}].Text">Text:</label>
               <input type="text" class="form-control" id="Formats[${itemCounter}].Text" name="Formats[${itemCounter}].Text"></input>
            </div>
         </div>
      `

      itemCounter++

      // Thêm Size mới vào container và cập nhật hiển thị
      itemContainer.append(newHtml)

      $('.remove-item').click(function () {
         $(this).closest('.form-item').remove() // Xóa 'form-item' chứa nút xóa được bấm
      })
   })
}

function handleRoasts() {
   var itemContainer = $('#admin-roast-container')
   var itemButton = $('#admin-add-roast-btn')

   var lastIndex = itemButton
      .closest('#admin-type-container')
      .find(".form-item:last input[name^='Roasts']")
   // console.log(lastIndex)

   var itemCounter = 0

   if (lastIndex.length) {
      lastIndex = lastIndex.attr('name').match(/\[(\d+)\]/)[1]
      itemCounter = +lastIndex + 1
   }

   itemButton.click(function () {
      // Tạo các trường input cho Size mới
      var newHtml = `
         <div class="form-item d-flex align-items-center w-100 gap-3 ps-4">
            <button style="max-height: 40px" class="btn btn-danger remove-item mt-2" type="button">Remove</button>
            <div class="form-group mb-3 w-100">
               <label for="Roasts[${itemCounter}].Text">Text:</label>
               <input type="text" class="form-control" id="Roasts[${itemCounter}].Text" name="Roasts[${itemCounter}].Text"></input>
            </div>
         </div>
      `

      itemCounter++

      // Thêm Size mới vào container và cập nhật hiển thị
      itemContainer.append(newHtml)

      $('.remove-item').click(function () {
         $(this).closest('.form-item').remove() // Xóa 'form-item' chứa nút xóa được bấm
      })
   })
}

function handleFlavors() {
   var itemContainer = $('#admin-flavor-container')
   var itemButton = $('#admin-add-flavor-btn')

   var lastIndex = itemButton
      .closest('#admin-type-container')
      .find(".form-item:last input[name^='Flavors']")
   // console.log(lastIndex)

   var itemCounter = 0

   if (lastIndex.length) {
      lastIndex = lastIndex.attr('name').match(/\[(\d+)\]/)[1]
      itemCounter = +lastIndex + 1
   }

   itemButton.click(function () {
      // Tạo các trường input cho Size mới
      var newHtml = `
         <div class="form-item d-flex align-items-center w-100 gap-3 ps-4">
            <button style="max-height: 40px" class="btn btn-danger remove-item mt-2" type="button">Remove</button>
            <div class="form-group mb-3 w-100">
               <label for="Flavors[${itemCounter}].Text">Text:</label>
               <input type="text" class="form-control" id="Flavors[${itemCounter}].Text" name="Flavors[${itemCounter}].Text"></input>
            </div>
         </div>
      `

      itemCounter++

      // Thêm Size mới vào container và cập nhật hiển thị
      itemContainer.append(newHtml)

      $('.remove-item').click(function () {
         $(this).closest('.form-item').remove() // Xóa 'form-item' chứa nút xóa được bấm
      })
   })
}

$(document).ready(function () {
   handleImages()
   handleSizes()
   handleFlavorProfiles()
   handleDetails()
   handleTypes()
   handleAttributes()
   handleInsideTypes()
   handleSymbols()
   handleFormats()
   handleRoasts()
   handleFlavors()

   $('.remove-item').click(function () {
      $(this).closest('.form-item').remove() // Xóa 'form-item' chứa nút xóa được bấm
   })
})
