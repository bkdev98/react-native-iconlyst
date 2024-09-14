import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystClipboardPinLight = ({
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
      d="M14.323 6.286H9.677c-.75 0-1.357-.608-1.357-1.357v-.573C8.32 3.607 8.927 3 9.677 3h4.646c.75 0 1.357.607 1.357 1.356v.573c0 .75-.607 1.357-1.357 1.357"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.68 4.594a3.755 3.755 0 0 1 3.755 3.754v8.898A3.755 3.755 0 0 1 15.68 21H8.321a3.755 3.755 0 0 1-3.755-3.754V8.348a3.755 3.755 0 0 1 3.755-3.754"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.999 15.389v1.836m2.124-6.73a.98.98 0 0 1-.23 1.063s-.447.336-.517.502c-.09.211-.103.713 0 .919s.744.557.744.557c.387.291.616.746.616 1.23a.62.62 0 0 1-.622.623h-4.23a.62.62 0 0 1-.622-.622c0-.485.228-.94.616-1.23 0 0 .64-.351.743-.558.103-.206.09-.708 0-.919-.07-.166-.518-.502-.518-.502a.978.978 0 0 1 .68-1.68h2.432c.4 0 .76.245.908.618"
    />
  </Svg>
);
export default IconlystClipboardPinLight;
