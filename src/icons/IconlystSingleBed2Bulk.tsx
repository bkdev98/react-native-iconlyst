import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSingleBed2Bulk = ({
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
      d="M21.823 13.887a3.51 3.51 0 0 0-2.58-2.58c-.404-.092-.85-.092-1.734-.092H7.335c-.885 0-1.33 0-1.743.095a3.5 3.5 0 0 0-2.571 2.577c-.1.408-.1.853-.1 1.738 0 .476 0 .739.06.99a2.09 2.09 0 0 0 1.906 1.589v1.07a.75.75 0 0 0 1.5 0v-1.06h12.07v1.06a.75.75 0 0 0 1.5 0v-1.07a2.088 2.088 0 0 0 1.904-1.591c.06-.248.06-.511.06-.988 0-.885 0-1.33-.098-1.738"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M5.637 10.215h13.571a.5.5 0 0 0 .5-.5v-3.08c0-.65 0-1.006-.119-1.34-.202-.562-.642-1-1.202-1.2-.329-.12-.667-.12-1.339-.12h-9.25c-.674 0-1.012 0-1.338.119a2 2 0 0 0-1.207 1.205c-.116.33-.116.687-.116 1.336v3.08a.5.5 0 0 0 .5.5"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystSingleBed2Bulk;
