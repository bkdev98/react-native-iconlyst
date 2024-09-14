import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMessageBoldcurved = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.395 10.065c-.352.422-3.51 4.123-6.134 4.123-2.62 0-5.81-3.698-6.167-4.12A.75.75 0 0 1 7.241 9.1c1.171 1.387 3.568 3.587 5.02 3.587s3.826-2.198 4.982-3.584a.751.751 0 0 1 1.152.961M12.25 2.918c-7.4 0-10.024 2.516-10.024 9.617 0 7.1 2.623 9.617 10.024 9.617s10.024-2.517 10.024-9.617-2.623-9.617-10.024-9.617"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMessageBoldcurved;
