import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBalloonTwoTone = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.19 13.947c1.276 3.657 5.428 4.073 5.428 4.073s3.696-2.864 2.783-6.273c-.608-2.268-3.025-3.708-5.292-3.1-2.268.607-3.527 3.033-2.92 5.3"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.786 13.514c-.223-.832.24-1.722 1.072-1.945"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.812 8.805c-1.277 3.657-5.43 4.073-5.43 4.073s-3.695-2.864-2.782-6.273c.608-2.267 3.025-3.708 5.292-3.1 2.268.607 3.527 3.033 2.92 5.3"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.073 8.35c.202-.755-.217-1.562-.971-1.765M8.622 18.026c.298.628.54 2.18-.686 3.84M15.145 21.317c2.102-3.976-1.807-4.163.24-8.435"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m13.973 13.302 2.14.424M9.865 18.262l-2.14.424"
    />
  </Svg>
);
export default IconlystBalloonTwoTone;
