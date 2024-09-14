import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSlippers2Bulk = ({
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
      fillOpacity={0.4}
      fillRule="evenodd"
      d="M21.45 8.51c-.01.02-.15.62-.36 1.48-.11.46-.24.98-.37 1.54-.29 1.17-.6 2.46-.84 3.4-.42 1.66-1.92 2.78-3.6 2.78-.19 0-.39-.01-.59-.04-1.91-.29-3.28-1.94-3.18-3.86.05-1 .13-2.35.22-3.57.03-.58.06-1.12.09-1.58.05-.84.09-1.4.09-1.4.36-2.39 2.56-4.03 4.92-3.67 2.35.36 3.98 2.57 3.62 4.92M11.49 16.56c.1 1.89-1.3 3.58-3.19 3.86-.19.03-.39.04-.58.04-1.68 0-3.18-1.12-3.6-2.78-.23-.93-.54-2.2-.83-3.35-.13-.56-.26-1.08-.37-1.54-.21-.88-.36-1.49-.36-1.49-.01-.02-.01-.03-.01-.04a4.324 4.324 0 0 1 3.62-4.92 4.33 4.33 0 0 1 4.92 3.63c0 .02.04.63.09 1.51.03.46.07 1 .1 1.56.08 1.21.16 2.55.21 3.52"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.28 13.04a.9.9 0 0 1-.22-.04c-2.7-.84-5.18-.44-7.61 1.25-.05.03-.1.06-.16.08-.13-.56-.26-1.08-.37-1.54 1.16-.75 2.36-1.24 3.58-1.5l-.27-1.47c-.07-.41.2-.8.61-.87.4-.07.8.2.87.6l.28 1.54c1.04-.05 2.1.07 3.19.39.03.46.07 1 .1 1.56M21.09 9.99c-.11.46-.24.98-.37 1.54-2.55-1.68-5.16-2.1-7.99-1.29.03-.58.06-1.12.09-1.58 1.07-.25 2.13-.35 3.17-.29l.32-1.8c.08-.4.47-.67.87-.6.41.07.68.46.61.87l-.31 1.73c1.23.25 2.44.72 3.61 1.42"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSlippers2Bulk;
