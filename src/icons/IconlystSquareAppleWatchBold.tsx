import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSquareAppleWatchBold = ({
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
      d="M15.094 20.366c-.108.51-.564.88-1.084.88h-3.955c-.52 0-.978-.37-1.086-.88l-.314-1.48c.147.012.288.035.443.035h5.87c.154 0 .294-.023.441-.035zM8.97 3.626c.108-.51.565-.88 1.086-.88h3.955c.52 0 .976.37 1.084.88l.33 1.548c-.15-.013-.293-.035-.45-.035H9.098c-.16 0-.306.023-.458.036zm8.826 2.533a3.2 3.2 0 0 0-.755-.537c-.003-.02.004-.038 0-.058l-.478-2.25a2.62 2.62 0 0 0-2.552-2.068h-3.955c-1.225 0-2.299.87-2.554 2.068l-.477 2.25c-.005.023.002.045 0 .068-1.098.6-1.736 1.72-1.736 3.228v6.28c0 1.53.64 2.67 1.736 3.28v.006l.478 2.252a2.62 2.62 0 0 0 2.553 2.068h3.955c1.224 0 2.297-.87 2.551-2.068l.478-2.25c1.1-.601 1.74-1.724 1.74-3.235V8.86c.003-1.12-.338-2.054-.984-2.702"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSquareAppleWatchBold;
