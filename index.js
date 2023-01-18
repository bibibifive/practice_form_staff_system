class StaffSystem {
  constructor(name, data) {
    this.name = name
    this.data = data
    this.staff_system = document.getElementById(name)
    this.table = this.staff_system.querySelector('.content').children[0]
    this.save_button = this.staff_system.querySelector('.save_button')
    this.user_name = this.staff_system.querySelector('.user_name')
    this.user_age = this.staff_system.querySelector('.user_age')
    this.upload_button = this.staff_system.querySelector('.upload_button')
    this.name_judge = this.staff_system.querySelector('.name_judge')
    this.age_judge = this.staff_system.querySelector('.age_judge')
  }

  // this.table.innerHTML = 1
  render(data) {
    let dataHead = `
    <thead>
      <tr>
        <th>姓名</th>
        <th>年龄</th>
      </tr>
    </thead>
    <tbody>`
    let dataBody = [...data].reduce((pre, v) => {
      return (pre += `
        <tr>
        <td>${v[0]}</td>
        <td>${v[1]}</td>
      </tr>`)
    }, '')
    let res =
      dataHead +
      dataBody +
      `
    </tbody>`
    return res
  }

  // 初始化
  init() {
    this.table.innerHTML = this.render(this.data)

    this.save_button.addEventListener('click', () => {
      let name_judge = /^[a-z]{1,20}$/i
        this.saveStaffInfo(
          user_name.value,
          user_age.value,
          name_judge,
        )
    })

    this.upload_button.addEventListener('click', () => {
      this.uploadStaffInfo(this.data)
    })
  }

  // 保存
  saveStaffInfo(name, age, name_judge) {
    name = name.trim()
    age = +age.trim()
    this.name_judge.classList.add('hide')
    this.age_judge.classList.add('hide')

    if (!name || !age) {
      this.name_judge.classList.remove('hide')
      this.age_judge.classList.remove('hide')
      return
    }
    if (!name_judge.test(name)){
      this.name_judge.classList.remove('hide')
      return
    }
    if (typeof age !=='number') {
      this.age_judge.classList.remove('hide')
      return
    }
    this.data.push([name, age])
    this.table.innerHTML = this.render(this.data)
  }

  // 上传
  uploadStaffInfo(data) {
    data.forEach(v => {
      console.log(v)
    })
  }
}

const staff_system_app = new StaffSystem('staff_system', [
  ['Tom', 20],
  ['Jerry', 21],
])

staff_system_app.init()
