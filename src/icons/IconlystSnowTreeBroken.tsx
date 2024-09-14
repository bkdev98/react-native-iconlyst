import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSnowTreeBroken = ({
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
      d="M12.512 6.896C11.195 9.52 9.718 11.914 8 13.928h2.075c-.803 1.63-1.766 3.057-2.895 4.271h10.664q-1.692-1.822-2.895-4.272h2.075c-1.128-1.322-2.153-2.81-3.097-4.419M12.512 18.225v3.131M9.51 12.04l2.576-.61M15.283 14.671l-3.248.769M21.25 8.599a2.56 2.56 0 0 1-1.703-1.703 2.56 2.56 0 0 1-1.703 1.703 2.56 2.56 0 0 1 1.703 1.703M4.966 3.874v5.115m2.213-3.836L2.75 7.71m4.43 0L2.75 5.153M12.512 4.432a1.127 1.127 0 1 0 1.072 1.472"
    />
  </Svg>
);
export default IconlystSnowTreeBroken;
