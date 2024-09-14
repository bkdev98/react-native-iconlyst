import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGemBulk = ({
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
      fillRule="evenodd"
      d="M16.716 2.5H8.282C5.122 2.5 3 4.723 3 8.031v7.939c0 3.308 2.122 5.53 5.282 5.53h8.433c3.161 0 5.285-2.222 5.285-5.53V8.031C22 4.723 19.877 2.5 16.716 2.5"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m17.089 12.284-3.473 3.812a1.52 1.52 0 0 1-1.117.492h-.002a1.52 1.52 0 0 1-1.115-.492l-3.472-3.81-.002-.002a1.69 1.69 0 0 1-.145-2.084l1.405-2.053a1.69 1.69 0 0 1 1.388-.737h3.889c.552 0 1.07.274 1.387.733l1.4 2.055c.44.65.38 1.507-.143 2.086m-2.643-3.373c.056 0 .116.034.15.082l1.396 2.048a.195.195 0 0 1-.013.235l-3.488 3.809-3.471-3.808a.19.19 0 0 1-.016-.233l1.399-2.045a.2.2 0 0 1 .153-.088z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGemBulk;
