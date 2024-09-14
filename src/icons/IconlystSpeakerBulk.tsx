import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSpeakerBulk = ({
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
      d="M15.831 2.5H9.309a4.19 4.19 0 0 0-4.184 4.185v10.631A4.19 4.19 0 0 0 9.309 21.5h6.522a4.19 4.19 0 0 0 4.184-4.184V6.685A4.19 4.19 0 0 0 15.831 2.5"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.569 18.14a4.217 4.217 0 0 1-4.212-4.213 4.216 4.216 0 0 1 4.212-4.212 4.217 4.217 0 0 1 4.213 4.212 4.22 4.22 0 0 1-4.213 4.212m-2.712-4.213a2.715 2.715 0 0 1 2.712-2.712 2.716 2.716 0 0 1 2.713 2.712 2.715 2.715 0 0 1-2.713 2.712 2.714 2.714 0 0 1-2.712-2.712"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M11.613 6.455a1 1 0 0 1 .227-.332c.088-.09.207-.17.335-.223.145-.054.27-.073.406-.076.206.002.405.064.574.181.164.108.3.273.378.47.078.186.097.398.053.602a1 1 0 0 1-.276.516 1.05 1.05 0 0 1-.741.311 1.05 1.05 0 0 1-.871-.474 1 1 0 0 1-.168-.567q0-.215.083-.408"
    />
  </Svg>
);
export default IconlystSpeakerBulk;
