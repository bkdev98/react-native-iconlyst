import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShortcutAppTwoTone = ({
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
      d="m20.4 10.665-6.734 4.802a2.87 2.87 0 0 1-3.332 0L3.6 10.665a1.43 1.43 0 0 1 0-2.33l6.734-4.802a2.87 2.87 0 0 1 3.332 0L20.4 8.336a1.43 1.43 0 0 1 0 2.329"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m20.4 15.665-6.734 4.802a2.87 2.87 0 0 1-3.332 0L3.6 15.665a1.43 1.43 0 0 1 0-2.33l6.734-4.802a2.87 2.87 0 0 1 3.332 0l6.734 4.803a1.43 1.43 0 0 1 0 2.329"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystShortcutAppTwoTone;
