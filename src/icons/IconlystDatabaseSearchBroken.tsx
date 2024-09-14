import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDatabaseSearchBroken = ({
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
      strokeWidth={1.5}
      d="M11.06 3.025c-4.046 0-7.327 1.324-7.327 2.956 0 1.633 3.28 2.956 7.328 2.956 4.046 0 7.327-1.323 7.327-2.956 0-1.09-1.465-2.044-3.645-2.556"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m18.837 19.543 1.43 1.43M16.951 14.996a2.663 2.663 0 0 1 2.662 2.663 2.68 2.68 0 0 1-.777 1.886 2.667 2.667 0 0 1-4.548-1.886c0-.518.149-1.003.405-1.412M3.733 15.33v2.257s0 2.912 7.358 2.912"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M18.388 11.762V5.938M3.733 5.938v5.824s0 2.912 7.358 2.912"
    />
  </Svg>
);
export default IconlystDatabaseSearchBroken;
