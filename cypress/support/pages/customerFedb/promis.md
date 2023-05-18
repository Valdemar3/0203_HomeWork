        
        const resOutProm = () => {
            return new Promise((resolve, reject) => {
            let resOut1='H';
            this.getCaptcha().then( valueCaptcha => {
            let resIn;
            resIn = valueCaptcha.prop('textContent')
            resOut1 = eval(resIn)
            // console.log(typeof(resOut1))
            // console.log(resOut1)
            resolve(resOut1)
        })
            })
        }
        
        // Объявляем асинхронную функцию
        const asyncfunc = async () => {
        // внутри функции получаем результат промиса
            await resOutProm(resOut1);
        console.log(resOutProm(resOut1)); // => success!


        
        };
        // Не забываем вызвать функцию
        asyncfunc();
        let g = Number(asyncfunc(resOut1))
        console.log(typeof g)
        console.log(asyncfunc())
        
        // let resOut='H';
        // this.getCaptcha().then( valueCaptcha => {
        //     let resIn;
        //     resIn = valueCaptcha.prop('textContent')
        //     resOut = eval(resIn)
        //     console.log(typeof(resOut))
        //     console.log(resOut)
        // })