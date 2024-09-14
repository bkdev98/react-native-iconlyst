import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAtlassianTwoTone = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.863 3.927c.155-.04.331.014.431.14.057.075.095.162.138.246q3.7 7.42 7.4 14.838c.08.168.202.34.158.536-.03.233-.264.402-.493.394q-2.735.002-5.469 0a.46.46 0 0 1-.411-.25c-.206-.383-.4-.774-.605-1.158-.31-.603-.644-1.194-.95-1.799-.606-1.179-1.178-2.381-1.593-3.642a12 12 0 0 1-.52-2.156c-.178-1.246-.131-2.532.199-3.75a10 10 0 0 1 .52-1.507c.235-.5.473-1.002.767-1.471.098-.176.218-.372.428-.421Z"
    />
    <Path
      stroke={props.color}
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.282 11.23a.51.51 0 0 1 .51.141c.115.129.221.264.336.393.943 1.152 1.53 2.574 1.764 4.038a8.4 8.4 0 0 1 .07 2.036c-.045.19-.04.388-.091.576a5.5 5.5 0 0 1-.366 1.2c-.055.126-.098.266-.207.358a.42.42 0 0 1-.298.103H3.503a.5.5 0 0 1-.347-.12c-.137-.131-.203-.348-.118-.526.107-.237.232-.466.345-.7q1.81-3.608 3.618-7.216a.57.57 0 0 1 .281-.283Z"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystAtlassianTwoTone;
