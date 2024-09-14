import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBookmarkBold = ({
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
      d="M16.217 21.5H7.783c-3.16 0-5.283-2.221-5.283-5.526V8.027C2.5 4.721 4.623 2.5 7.783 2.5h8.435c3.159 0 5.282 2.221 5.282 5.527v7.947c0 3.305-2.123 5.526-5.283 5.526M8.064 5.984v8.853c0 .782.867 1.085 1.547.702l2.4-1.362 2.376 1.358c.68.388 1.55.08 1.55-.7l-.002-8.851a1 1 0 0 0-1-1H9.064a1 1 0 0 0-1 1"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBookmarkBold;
