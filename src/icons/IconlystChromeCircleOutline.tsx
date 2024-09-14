import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChromeCircleOutline = ({
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
      d="M12 21.75c-5.38 0-9.75-4.37-9.75-9.75S6.62 2.25 12 2.25s9.75 4.37 9.75 9.75-4.37 9.75-9.75 9.75m0-18c-4.55 0-8.25 3.7-8.25 8.25s3.7 8.25 8.25 8.25 8.25-3.7 8.25-8.25-3.7-8.25-8.25-8.25"
    />
    <Path
      fill={props.color}
      d="M15.04 17.864H8.96c-.63 0-1.23-.34-1.56-.88L6 14.644c-.34-.56-.34-1.28 0-1.85l3.42-5.74c.33-.55.93-.89 1.56-.89h2.03c.66 0 1.24.33 1.57.89l3.42 5.73c.14.23.22.49.25.74v.14c0 .34-.08.68-.26.97l-1.39 2.33c-.33.55-.93.89-1.56.89zm-5.38-1.5h5.38c.11 0 .22-.06.27-.16l1.08-1.81h-5.73l-1.01 1.97zm.67-7.92-3.04 5.1c-.06.1-.06.22 0 .32l1.06 1.77 1.19-2.32s0-.02.02-.03l1.64-3.17-.86-1.67zm3.99 4.45h2l-3.03-5.09a.3.3 0 0 0-.27-.15h-1.4l1.09 2.11v.02l1.61 3.12zm-2.87 0h1.18l-.59-1.15z"
    />
  </Svg>
);
export default IconlystChromeCircleOutline;
