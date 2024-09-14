import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHomeFunBold = ({
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
      d="M16.106 14.894C15.077 16.23 13.58 16.997 12 16.997s-3.075-.766-4.104-2.103a.749.749 0 1 1 1.189-.915c.742.965 1.804 1.518 2.915 1.518s2.175-.553 2.916-1.517a.75.75 0 0 1 1.189.914m3.813-7.269-5.572-4.54a3.72 3.72 0 0 0-4.692 0l-5.572 4.54a3.68 3.68 0 0 0-1.37 2.872v7.18a4.076 4.076 0 0 0 4.072 4.07h10.43a4.076 4.076 0 0 0 4.073-4.07v-7.18a3.68 3.68 0 0 0-1.369-2.872"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHomeFunBold;
