import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDocumentLoveBulk = ({
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
      d="M19.854 9.094H16.89c-1.767-.009-3.225-1.472-3.225-3.256v-3.14a.445.445 0 0 0-.443-.448H8.066c-2.404 0-4.354 1.979-4.354 4.397v10.511c0 2.535 2.047 4.592 4.557 4.592h7.675c2.403 0 4.344-1.96 4.344-4.378V9.533a.435.435 0 0 0-.434-.439"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.016 7.672c.673.007 1.608.01 2.4.007a.465.465 0 0 0 .332-.787c-.51-.534-1.218-1.28-1.93-2.027l-1.955-2.053a.46.46 0 0 0-.793.325v2.569c0 1.078.879 1.966 1.946 1.966M11.596 17.395c.266-.145 2.617-1.473 3.238-3.398.493-1.543-.232-3.11-1.654-3.569a2.65 2.65 0 0 0-1.945.132 2.69 2.69 0 0 0-1.939-.132c-1.423.459-2.15 2.027-1.656 3.566.599 1.908 2.968 3.253 3.236 3.4a.76.76 0 0 0 .72.001m.09-5.363a1.15 1.15 0 0 1 1.035-.176c.72.232.89 1.04.684 1.684-.309.959-1.46 1.864-2.168 2.32-.712-.458-1.868-1.366-2.168-2.32-.206-.643-.036-1.451.68-1.682q.171-.053.347-.053c.247 0 .492.079.694.229a.75.75 0 0 0 .896-.002"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDocumentLoveBulk;
