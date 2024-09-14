import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystReloadPlayVideoBold = ({
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
      d="M4.584 11.99c.008-4.544 3.711-8.24 8.255-8.24 1.426 0 2.807.384 4.038 1.082a2.4 2.4 0 0 0-.147.807 2.465 2.465 0 0 0 2.467 2.46 2.465 2.465 0 0 0 2.466-2.46 2.47 2.47 0 0 0-2.466-2.469c-.527 0-1.013.169-1.414.452a9.7 9.7 0 0 0-4.944-1.372c-5.369 0-9.746 4.368-9.755 9.738a.75.75 0 0 0 1.5.002M21.833 11.25a.75.75 0 0 0-.75.75c0 4.549-3.699 8.25-8.245 8.25a8.17 8.17 0 0 1-3.994-1.059c.113-.283.179-.589.179-.911a2.47 2.47 0 0 0-2.467-2.47 2.47 2.47 0 0 0 0 4.94c.483 0 .931-.145 1.312-.386a9.67 9.67 0 0 0 4.97 1.386c5.373 0 9.745-4.374 9.745-9.75a.75.75 0 0 0-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.354 8.795c-.458.26-.75.719-.826 1.298a17.6 17.6 0 0 0 0 3.788c.071.572.355 1.032.798 1.296.252.149.537.224.84.224.25 0 .514-.052.78-.157a10 10 0 0 0 2.89-1.812l.002-.003c.44-.403.682-.914.681-1.443 0-.527-.244-1.037-.68-1.435a9.7 9.7 0 0 0-2.885-1.811c-.547-.233-1.13-.214-1.6.055"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystReloadPlayVideoBold;
