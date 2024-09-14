import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMicrosoftVisualStudioOutline = ({
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
      d="M15.935 4.04a1.75 1.75 0 0 1 2.069-.379l2.775 1.388c.593.296.967.902.967 1.565v10.764a1.75 1.75 0 0 1-.967 1.565l-2.775 1.388a1.75 1.75 0 0 1-2.069-.378l-6.324-6.851-3.566 3.864a1.75 1.75 0 0 1-2.032.396l-.763-.36a1.75 1.75 0 0 1-1.004-1.583V8.614c0-.663.375-1.269.967-1.565l.775-.388.336.671-.336-.67a1.75 1.75 0 0 1 2.069.378l3.554 3.85zm-5.303 7.956 6.405 6.94a.25.25 0 0 0 .296.053l2.775-1.387a.25.25 0 0 0 .138-.224V6.614a.25.25 0 0 0-.138-.223l-2.775-1.388a.25.25 0 0 0-.296.054zm-2.041 0L4.955 8.057a.25.25 0 0 0-.296-.054l-.775.388a.25.25 0 0 0-.138.223v6.805a.25.25 0 0 0 .143.226l.763.36a.25.25 0 0 0 .29-.057z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMicrosoftVisualStudioOutline;
