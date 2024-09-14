import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDiningTableTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m3.5 5.783.922 7.764-.922 4.67M8.731 18.216v-3.663c0-.58-.47-1.052-1.052-1.052H4.422M21.5 5.783l-.922 7.764.922 4.67M16.27 18.216v-3.663c0-.58.47-1.052 1.051-1.052h3.258"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.518 18.216V9.197m-5.432 0h10.863"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystDiningTableTwoTone;
