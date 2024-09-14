import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBlowingAKissOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.177 13.369c.398-1.281 1.712-2.38 3.277-1.897l.005.001a2.56 2.56 0 0 1 1.445 1.159 2.55 2.55 0 0 1 1.591.968v.002c.991 1.307.402 2.916-.665 3.727-.853.648-2.003.845-2.835.904a10 10 0 0 1-1.521-.012l-.028-.003-.008-.001h-.004l.084-.746-.673.331-.002-.003-.004-.008-.011-.024a6 6 0 0 1-.173-.394c-.105-.258-.24-.62-.36-1.04-.228-.801-.438-1.95-.118-2.964m1.34 4.102-.672.331c.113.23.336.386.59.415zm.505-.719c.23.008.533.009.866-.015.76-.054 1.541-.228 2.035-.602.613-.466.725-1.168.378-1.627a1.05 1.05 0 0 0-.87-.414.75.75 0 0 1-.736-.512 1.06 1.06 0 0 0-.686-.678c-.551-.168-1.173.178-1.4.911l-.001.004c-.182.576-.08 1.365.13 2.105.093.325.198.613.284.828"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M12.27 21.75a9.75 9.75 0 1 1 9.286-12.731.75.75 0 0 1-1.43.458 8.246 8.246 0 1 0-4.408 10.021.75.75 0 0 1 .627 1.362 9.7 9.7 0 0 1-4.075.89"
    />
    <Path
      fill={props.color}
      d="M8.387 10.558a.75.75 0 0 1-.6-1.207 2.15 2.15 0 0 1 3.365 0 .75.75 0 0 1-1.188.914.59.59 0 0 0-.987 0 .75.75 0 0 1-.59.292M16.033 10.558a.75.75 0 0 1-.6-.293.59.59 0 0 0-.988 0 .75.75 0 0 1-1.188-.914 2.15 2.15 0 0 1 3.364 0 .75.75 0 0 1-.593 1.206zM12.208 17.414a.75.75 0 0 1-.22-1.467q.226-.066.435-.175a2 2 0 0 0-.226-.149.75.75 0 0 1 .012-1.319q.053-.027.107-.062a3 3 0 0 0-.271-.088.749.749 0 1 1 .4-1.445c1.35.373 1.633 1.017 1.633 1.492-.008.288-.12.564-.314.777.194.22.305.501.314.794 0 .411-.214 1.167-1.648 1.61a.8.8 0 0 1-.222.032"
    />
  </Svg>
);
export default IconlystBlowingAKissOutline;