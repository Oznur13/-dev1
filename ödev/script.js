

                        document.getElementById("listeYillar").addEventListener("change",hesapla);

                        let i;
                        
                          function yillar(){
                        
                            let tarih=new Date();
                            let guncelYil=tarih.getFullYear();
                            for(i=guncelYil;i>=2000;i--){
                            let yil=document.createElement("option");
                            document.getElementById("listeYillar").appendChild(yil);
                            yil.innerHTML=i;
                        }
                          }
                        
                        
                        
                        
                          
                               function hesapla(){
                        
                        
                                   let liste=document.getElementById("listeYillar");
                                   let secilenYilfiyat=liste.options[liste.selectedIndex].value;
                        
                                   let sonuc=50/secilenYilfiyat;
                        
                                   document.getElementById("sonuc").innerHTML="seçtiğiğniz yılda 35 tl ile"+sonuc.toFixed(1)+" tane ip alınabiliyordu.;"
                                
                                
                                
                                
                                }