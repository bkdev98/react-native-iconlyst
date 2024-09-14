import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDiningTableLight = ({
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
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m3 5.783.922 7.764L3 18.217M8.231 18.216v-3.663c0-.58-.47-1.052-1.052-1.052H3.922M21 5.783l-.922 7.764.922 4.67M15.77 18.216v-3.663c0-.58.47-1.052 1.051-1.052h3.258M12.018 18.216V9.197M6.586 9.197h10.863"
    />
  </Svg>
);
export default IconlystDiningTableLight;
