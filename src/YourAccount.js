import React from 'react'
import './assets/css/YourAccount.css'
import AccountContent from './AccountContent'
import AccountExtraContent from './AccountExtraContent'

function YourAccount() {
    return (
        <div className="youraccount">
            <h1>Your Account</h1>
            <div className="youraccount__row">
                <AccountContent
                    image="https://turnerduckworth.com/sites/default/files/styles/case_study_single_image_s_2x/public/2019-04/Amazon%20Box%202560.jpg?h=a92f03cd&itok=cw-XghMc"
                    title="Your Orders"
                    description="Track, return, or buy things again"
                />
                <AccountContent
                    image="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX///+AgIB7e3t8fHx4eHi8vLzExMS5ubn5+fl1dXX09PSEhITq6uqBgYHX19ekpKSVlZXJycno6OiKioqbm5u0tLTb29vR0dGqqqqQkJCZmZmurq7i4uLHx8fU1NT19fWr2Rc9AAAJEElEQVR4nO2d23biOgyGJ7bJGRIOSaDttO//lpsOZYZD5Djol23W5rvqRRfJHx9kybb065cn8rof1umJ9dDXua8He6Ds031bFcYYdeb4d1G1+7QvQ78cm7zv2sQonYyhlUnarn/i1syHXWLGxV3INMlueEqR+aopJuWdRRbN6tlEltnWUd5Z5DZ7pjFZ7xM1Q94Jlezr0C/uSN0Uc5rvoiGL5hk0lt2s7nmj0XTR99V0Ob9/XqKWaWgJVuqDYen7xhwi7qpZwdb3TZGFFkJQt/wGPGHaKJtxSB6fYW7RyRBazj0dqgFPmC60oBvyHVbgUeIuqnVceeDZiDHUISLTWC5xQ/AfehmNxI2AvBOb0NJOyAmMRGJZCSqsIuioucgYPKOXwWfU/CAp8CjxEFpiM8dM6J9Q25yPopqwAjNXQ69MkbRNtkjTdJE1bVIY109jgq7DP52cCW2SdnETNMz7RTsdiPtD8RlI3ZHS5Q1NtScCaflqX7n0AR1uQn2bVmjatW2qyNcOLpd+86bohnTy5YpDP/kr/WGyq5tAkY16SqBx0PdNPxn7MGE84glLqLX7l0/1xG8dBHWQDPYPb97mfPf6beLXAvj8+dL+SouZv7ewSwyweuvsFtttBF7SW39PeY9qWE2h3j4yM9Rb62/6Noq2JtTbx96mtEn03YilZdTo7aNjJrdJNH4b8d3ShAyv1eZNq3fg+0+S20YMJ/Jgi4hon9NpSjehWbF+eUV3f+Vz7balBc61g7dY7OIW8u5O9ORbAJZX9GLQzDeyj7InX0Lxl8g1OQL0HvDuTuRkP4K4ORanzNdc80m+AsYFOJAf0Fc8g+ykCvMGn1Q/9dZNyYGC8uLIRlSgB0zwQXVS2FxHztXmA/QEOwuqDXH2irK3imtt3WipD/wb9ojfVCO2sEdYIJ17/QV7xhc1l3lx9TdEJ9XIDYaGkKh8bChSEShosMjLQyg6qgchPdSSeIYXT39HKMROAsR0pnfQp4xDmGOF3QSj4kAeQsNUoIHp+d5CecIeNvYp5wbgNwV4zBgb4uNq8HOI0W7kzQW1ZkSHGIiFmwc/fz2uED7JEVO2WYOfcw+lEO26EU6oB4WEZ6HRpphYWHjwLv63CuFP9vUc9yejA9JEWP2lEMBLIYqXQjleClG8FMrxUojipVCOl0IUL4VyvBSOkeebfvi9yP6xWA/9JrdtJD2PwnrodltTXCSnOaeoKcx21w1U/PM5FOar/VYZyxlurY3ajl/HeAaFq512uhRz/K/d/ZZA9ArrzPHOz4/IZXbTXSNXuNmruVefldpfBeyjVlg2s+7fndGqudhYilhh3j2YnuY7QU33d9KJV+FQca7mq+q8UR+rwrzh5lYwTR6zwp6Zf+fPLy37eBUuQPlpFrEqZPfQM6aJUeE6b3HZP1Sbr2NTqDvrraW56G10u2vABEPW3/OgcOJWnjTyx77ouwK+JEofqJFMZOJGJSswcB/9RraffoQXeJQoeZydvtHlE8EbXs6ZTGSRy3YymUTBF2IpFqjTwd6ROilM3zr0jtAJRfI2UgBEDkNP5MHwi8ithDgsxRkBixFVE4o0YlxNKNCIPSYEg6NAT6fUlbxwgC/qURfWAgK+xmbL9BEIbCaQPLzje0+FvG0Zmak4ATUY0ay5L0Guv20ZhQICzDpkSUczEz0ze6kV4BkejFehzfKw79Juf1gySmBcAvMwIJ1Um2Z17lXlqoFohHVTOpeJO8XuOvJQ7wDLQFiuEzrhjis6uT8ws+JvdcAuzLHdivEUddYEdG6AHAz2mpRKUWdNQOcEaG3KX9BQwb+a+8OgZQ13GFrmA+4cBhqITGtozQhCZfhwBWIRrRkEHShsRqtm2gxIpsEN7yUm1sfMNX2BmGqIy9uuTFhl5kiETDUZs8yYvR/lzF9HbEMxJ4OpgBEvxAVJbMSbSifnc6YtQkymvDeY7EbMQQBIOJLzplJphQXfXDAtlrhC/nYwmUPQDelxCMgzyF06ys6lCCeY61nI2kOEySfOebq/guiaJlH8fDVchbLr0hgU2mc7rm+BUMiOBlsbkb1dEEMb2iYDfoAkCoWCcZpoFBKpABF1BREKAQFvvRxrxRpRVxCQ3cxSrGAGI58a0TkgCSlB5/WK252wFHN8BXCGj8oEOZM7H4PpU5wBZIosMd9aSqE1VulI5Ar5AkE3LKQUIm5fOBQ5dEBIIaQ04nvUChEHozAHMYQUQo5jYAyikELIkXbMcSEphYjTGDnkdLCQwodLvF3B3cX8g4xCUD0GsibJHGQUgu7MMmPCP+8iohBUdwZyfFZGIeoQLWJVI6IQVuwZYfNFFMKOXyLuHYooxN1DRESMJBTirnUD3kZCIbAsCvNIjZRCyGGaH/jHoCUUIq9Z8pc1AgqhSUD42TAkFEJvdLNX33iF0CpoADcYrxB9n5vrJOIVoi+RkhUJHbmrYUKWb3MEWG3xB+4nvz11wr2Uii9JaqnS68RN+J27WQCpPHwNWbrSkZvIJjcKK1HMktuIVzt93F1JgSYExNzUP4kr9kQqUo+Uvd+tutNYLNnZpqQqd7EDpyp5yxbZW8JesEnlUfoAbCWq2QmGRyjEcmHt47iVr+QKkFMVXn0jWKkzinv5sjWBIXsYPMBe0y3ca14IhcKluVeh89QU2Kq8I3Rhh6LxULa6DdlRNTjvziiIM5MP46Gk8y/M0uZB5BYz1wSzirKW8JJFGIlGPg/0X95DSDTQxFBTwBLMzxAou5a5l+jbzVCeBXpvRd8t6F1iCIFHf9ifRCPn81rxZjR8molrPJl+f4b+ng9LTTUUWntaqo1TAguTjKNaL4ttC8L+og9/cIpPwZ6qNSpfGYtyJ9WMZhe6h55Zw6vMfKMTod2JRygFFjimiaUBT/QVVqOpZFLnc0gBNdfOqKXEDiibr4XGaFR68RVaDEGZATQqncU1AK/JU81M3qVT4ag9n6F9eBNUqTbgInsGm277QIpZbbYdNs26KB/vSTGnJVWRvAd1IR7hIzto46JSGX3Ink7eiXLVtZUxZH5rrYyp2m4V89w5zVc9ZM2hKgpzUV79+HdRVG2TDXWslm82ed1/DumZ4bOvfRmF/wCTk5R3WrCEKQAAAABJRU5ErkJggg=="
                    title="Login & security"
                    description="Edit login, name, and mobile number"
                />
                <AccountContent
                    image="https://images-na.ssl-images-amazon.com/images/G/01/credit/img16/CCMP/newstorefront/amazoncards/primebenefiticon.png"
                    title="Prime"
                    description="View benefits and payment settings"
                />
            </div>
            <div className="youraccount__row">
                <AccountContent
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRzU1KbH8jEOcJXe5GU_yh9FVp-d5xx39Hwjg&usqp=CAU"
                    title="Your Addresses"
                    description="Edit addresses for orders and gifts"
                />
                <AccountContent
                    image="https://e7.pngegg.com/pngimages/48/549/png-clipart-swipe-card-icon-credit-card-bank-card-debit-card-money-card-card-material-blue-text.png"
                    title="Payment Options"
                    description="Edit or add payment methods"
                />
                <AccountContent
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQERbCMVJN3uD_L-9hTewsRGKI0AnC9TD_SLA&usqp=CAU"
                    title="Amazon Pay balance"
                    description="Add money to your balance"
                />
            </div>
            <div className="youraccount__extraContent" >
                <div className="youraccount__row">
                    <AccountExtraContent title="Digital content and devices" content={["Apps & more", "Content and devices"]} />
                    <AccountExtraContent title="Email alerts, messages, and ads" content={["Advertising preferences", "Communication", "preferences", "SMS alert preferences", "Message center", "Alexa shopping notifications", "Deals Notifications"]} />
                    <AccountExtraContent title="More ways to pay" content={["Default Purchase Settings", "Amazon Pay", "Bank accounts for refunds", "Coupons"]} />
                </div>
                <div className="youraccount__row">
                    <AccountExtraContent title="Ordering and shopping preferences" content={["Leave packaging feedback", "Lists", "Photo ID proofs", "Profile", "Language settings"]} />
                    <AccountExtraContent title="Other accounts" content={["Amazon Business registration", "Seller account", "Amazon Web Services", "Login with Amazon"]} />
                    <AccountExtraContent title="Shopping programs and rentals" content={["Subscribe & Save", "Shop the Kids Store by age"]} />
                </div>
            </div>
        </div>
    )
}

export default YourAccount
