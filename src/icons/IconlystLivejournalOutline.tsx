import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLivejournalOutline = ({
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
      d="M17.988 7.19A7.65 7.65 0 1 0 7.17 18.008l-.531.53.53-.53A7.65 7.65 0 1 0 17.988 7.19m1.06-1.06a9.15 9.15 0 1 1-12.94 12.939 9.15 9.15 0 0 1 12.94-12.94"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M4.958 2.607c1.352-.747 2.906-.239 3.858.715L15.29 9.8c.223.223.384.506.459.816l.989 4.038a1.738 1.738 0 0 1-2.101 2.103l-4.04-.99h-.002a1.74 1.74 0 0 1-.814-.459L3.35 8.886c-.996-.995-1.47-2.606-.691-3.978.585-1.03 1.293-1.746 2.299-2.301m2.797 1.775c-.626-.627-1.468-.796-2.072-.463-.75.415-1.263.926-1.72 1.73-.365.643-.197 1.533.446 2.176l6.432 6.423a.24.24 0 0 0 .113.064l4.038.989a.238.238 0 0 0 .288-.288l-.99-4.041a.24.24 0 0 0-.062-.11z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.328 9.98a.75.75 0 0 1-.498.936 5.9 5.9 0 0 0-3.91 3.91.75.75 0 1 1-1.434-.439 7.4 7.4 0 0 1 4.905-4.905.75.75 0 0 1 .937.498M16.07 12.35a.75.75 0 0 1-.258 1.028 5.7 5.7 0 0 0-2.203 2.408.75.75 0 1 1-1.35-.652 7.2 7.2 0 0 1 2.783-3.043.75.75 0 0 1 1.028.258"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLivejournalOutline;
