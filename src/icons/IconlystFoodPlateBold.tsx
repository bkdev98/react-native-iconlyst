import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFoodPlateBold = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M16.684 3.692a.75.75 0 0 1 .315 1.012l-1.082 2.06a4.22 4.22 0 0 1 3.715 3.637h.342c.908 0 1.624.796 1.515 1.703a10 10 0 0 1-.434 1.938 9.97 9.97 0 0 1-4.605 5.552 4.5 4.5 0 0 1-2.182.549H9.734a4.5 4.5 0 0 1-2.189-.552 9.94 9.94 0 0 1-5.034-7.493A1.525 1.525 0 0 1 4.026 10.4h.82v-.044a4.813 4.813 0 0 1 7.1-4.235l-.312-1.465a.75.75 0 1 1 1.467-.312l.59 2.779q.21-.097.432-.172l1.548-2.945a.75.75 0 0 1 1.012-.315M12.52 8.69l.027.047c.268.471.426 1.034.426 1.62v.043H8.748c.146-.378.461-.676.853-.797a.75.75 0 1 0-.443-1.433 2.85 2.85 0 0 0-1.96 2.23h-.852v-.044a3.313 3.313 0 0 1 6.175-1.666m2.328-.386-.07.017a2.7 2.7 0 0 0-.646.26c.22.55.34 1.154.34 1.775v.044h3.639a2.723 2.723 0 0 0-3.263-2.096"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFoodPlateBold;
