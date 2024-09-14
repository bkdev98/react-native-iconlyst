import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFrameAiGenerateOutline = ({
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
      d="M16.833 2.874c.17-.832 1.36-.832 1.53 0a3.55 3.55 0 0 0 2.763 2.763c.832.17.832 1.36 0 1.53a3.55 3.55 0 0 0-2.763 2.763c-.17.832-1.36.832-1.53 0a3.55 3.55 0 0 0-2.763-2.763c-.832-.17-.832-1.36 0-1.53a3.55 3.55 0 0 0 2.763-2.763m.765 2.028c-.388.6-.9 1.112-1.5 1.5.6.388 1.112.9 1.5 1.5.388-.6.9-1.112 1.5-1.5-.6-.388-1.112-.9-1.5-1.5M5.517 3.135a.75.75 0 0 1 .75.75v1.767h4.284a.75.75 0 0 1 0 1.5H6.267v10.581h10.581V13.45a.75.75 0 0 1 1.5 0v4.284h1.767a.75.75 0 0 1 0 1.5h-1.767V21a.75.75 0 1 1-1.5 0v-1.767H6.267V21a.75.75 0 1 1-1.5 0v-1.767H3a.75.75 0 1 1 0-1.5h1.767V7.152H3a.75.75 0 0 1 0-1.5h1.767V3.885a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFrameAiGenerateOutline;
