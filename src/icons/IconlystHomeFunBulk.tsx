import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHomeFunBulk = ({
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
      d="m20.489 7.625-5.573-4.539a3.72 3.72 0 0 0-4.692-.001l-5.571 4.54a3.68 3.68 0 0 0-1.37 2.872v7.18a4.075 4.075 0 0 0 4.071 4.07h10.431a4.075 4.075 0 0 0 4.072-4.07v-7.18a3.68 3.68 0 0 0-1.368-2.872"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.676 14.894c-1.028 1.336-2.524 2.103-4.105 2.103-1.58 0-3.076-.766-4.105-2.103a.749.749 0 1 1 1.189-.915c.742.965 1.805 1.518 2.915 1.518s2.175-.553 2.916-1.517a.75.75 0 0 1 1.189.914"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHomeFunBulk;
