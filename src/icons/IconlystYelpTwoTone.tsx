import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystYelpTwoTone = ({
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
      strokeWidth={1.5}
      d="M10.758 3.02c.812-.09 2.174.079 2.174 1.291 0 .637-.334 3.704-.377 4.398-.02.33-.118.994-.269 1.296-.387.775-1.326.484-1.723-.067-.28-.3-2.494-3.717-2.81-4.59-.318-.872.3-1.468 1.051-1.81a7 7 0 0 1 1.954-.518Z"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeWidth={1.5}
      d="M19.066 8.265c.304.368.532.79.719 1.227.463 1.095.013 1.735-1.062 1.967-1.117.253-2.115.449-3.232.703-.596.153-1.336-.171-1.236-.902.045-.309.259-.555.462-.777.762-.779 1.405-1.501 2.182-2.264.812-.746 1.46-.802 2.167.046ZM5.709 10.545c1.184.327 2.338.8 3.493 1.216 1.107.444 1.149 1.568-.126 1.877l-3.39.767c-.835.18-1.472-.098-1.605-.997-.094-.76-.057-1.55.213-2.272.258-.653.8-.753 1.415-.591ZM15.657 14.5c1.004.519 1.884.837 2.877 1.379.698.416 1.343.905.841 1.78a4.95 4.95 0 0 1-1.832 1.798c-.866.46-1.352-.106-1.786-.803-.561-.983-.973-1.78-1.514-2.775-.609-1.14.15-2.016 1.414-1.38Z"
    />
    <Path
      stroke={props.color}
      strokeWidth={1.5}
      d="M12.097 16.279c-.042 1.093-.078 2.186-.14 3.278-.173 1.816-1.669 1.626-3.012.998-1.308-.655-1.205-1.4-.408-2.528q.865-1.194 1.75-2.374c.736-.966 1.849-.726 1.81.626Z"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystYelpTwoTone;