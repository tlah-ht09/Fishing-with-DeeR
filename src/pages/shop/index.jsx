import * as _ from './style'
import Deer from '../../assets/menu_img.png'

export const Shop = () => {
    return(
        <_.main>
            <_.fishingRopDiv>
                <_.fishingRop> 
                    <_.fishingRopImg src={Deer}></_.fishingRopImg>
                    <_.fishingRopT>실 <br></br>
                    장착됨</_.fishingRopT>
                </_.fishingRop>
                <_.fishingRop>
                    <_.fishingRopImg src={Deer}></_.fishingRopImg>
                    <_.fishingRopT>나무 낚싯대
                    5000원</_.fishingRopT>
                </_.fishingRop>
                <_.fishingRop>
                    <_.fishingRopImg src={Deer}></_.fishingRopImg>
                    <_.fishingRopT>플라스틱 낚싯대
                    10000</_.fishingRopT>
                </_.fishingRop>
                <_.fishingRop>
                    <_.fishingRopImg src={Deer}></_.fishingRopImg>
                    <_.fishingRopT>평범한 낚싯대
                    25000</_.fishingRopT>
                </_.fishingRop>
            </_.fishingRopDiv>
            
            <_.fishingRop2>
                    <_.fishingRopImg2 src={Deer}></_.fishingRopImg2>
                    <_.fishingRopT>최고급 낚싯대
                    250만원</_.fishingRopT>
                </_.fishingRop2>
        </_.main>
    )
}