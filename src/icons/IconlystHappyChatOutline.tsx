import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHappyChatOutline = ({
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
      d="M12.23 21.762a9.7 9.7 0 0 1-4.068-.889 3.3 3.3 0 0 0-.984-.3c-.36.04-.713.13-1.049.266-.765.263-1.81.624-2.568-.132-.757-.756-.414-1.756-.139-2.56.139-.341.227-.7.264-1.066a3.2 3.2 0 0 0-.3-.995 9.761 9.761 0 1 1 8.842 5.674zm-5.056-2.687a4.2 4.2 0 0 1 1.565.414l.035.014a8.25 8.25 0 1 0-4.009-4.009c.24.498.384 1.038.421 1.59a4.9 4.9 0 0 1-.345 1.547c-.093.277-.314.923-.22 1.017s.742-.13 1.02-.225a5 5 0 0 1 1.533-.348"
    />
    <Path
      fill={props.color}
      d="M8.976 10.22a.976.976 0 0 1-.001-1.95.975.975 0 0 1 0 1.95zM15.476 10.22a.976.976 0 0 1-.001-1.95.975.975 0 1 1 0 1.95zM12.252 16.296a4.15 4.15 0 0 1-3.291-1.679.751.751 0 0 1 1.19-.914 2.564 2.564 0 0 0 4.2 0 .75.75 0 1 1 1.19.914 4.15 4.15 0 0 1-3.29 1.68"
    />
  </Svg>
);
export default IconlystHappyChatOutline;
