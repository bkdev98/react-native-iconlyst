import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSerumBulk = ({
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
      d="M16.515 5.59c-.79-.37-1.58-.63-2.38-.8q-.75-.165-1.5-.21-.63-.03-1.26 0-.75.045-1.5.21c-.8.17-1.59.43-2.38.8-.92.42-1.51 1.35-1.51 2.36v8.27c0 1.01.59 1.93 1.51 2.35 1.25.58 2.5.9 3.76.99V21c0 .41.34.75.75.75s.75-.34.75-.75v-1.44c1.26-.09 2.51-.41 3.76-.99.91-.42 1.5-1.34 1.5-2.35V7.95c0-1.01-.59-1.94-1.5-2.36"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.375 4.38c0-.35.28-.63.63-.63s.63.28.63.63v.2q.75.045 1.5.21v-.41c0-1.18-.96-2.13-2.13-2.13-1.18 0-2.13.95-2.13 2.13v.41q.75-.165 1.5-.21zM13.565 14.59c-.52.02-1.06.01-1.62 0-.5-.01-1.02-.01-1.54 0-.41.01-.74.35-.74.76.01.41.35.74.75.74h.02a38 38 0 0 1 1.5 0c.3 0 .61.01.91.01.26 0 .51-.01.77-.01.41-.01.73-.36.72-.77-.01-.42-.32-.73-.77-.73M11.465 10.15l.54-.53.54.53c.29.3.29.78 0 1.08a.78.78 0 0 1-1.08 0 .78.78 0 0 1 0-1.08m.54 2.8c.58 0 1.16-.22 1.6-.66.88-.88.88-2.32 0-3.2l-1.07-1.06a.754.754 0 0 0-1.06 0l-1.07 1.06a2.27 2.27 0 0 0 0 3.2c.44.44 1.02.66 1.6.66"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSerumBulk;
