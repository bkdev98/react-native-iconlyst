import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFire3Outline = ({
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
      d="M12.376 2.385a.75.75 0 0 1 .777-.05c2.653 1.387 4.959 3.35 6.322 6.18 1.305 2.546 1.437 5.526.479 8.01-.964 2.5-3.04 4.51-6.106 5.023C5.844 23.284.468 13.496 6.502 7.74c.295-.29 1.133-1.072 1.522-1.35A.75.75 0 0 1 9.21 7c0 .181.1 1.22.293 2.193.093.467.196.865.3 1.124.367-.052.689-.241.985-.575.367-.412.675-1.028.906-1.793.462-1.53.552-3.442.368-4.852a.75.75 0 0 1 .314-.712m1.273 1.963c.02 1.31-.137 2.768-.52 4.035-.265.88-.656 1.722-1.22 2.356-.557.627-1.295 1.06-2.211 1.09a.9.9 0 0 1-.448-.022 1.04 1.04 0 0 1-.437-.268c-.181-.183-.3-.42-.38-.61-.17-.403-.3-.937-.401-1.445-.064-.321-.12-.656-.166-.973-.126.118-.237.224-.315.301l-.01.01c-4.917 4.684-.57 12.697 6.005 11.256l.038-.007c2.496-.412 4.174-2.02 4.97-4.085.803-2.084.699-4.622-.417-6.794l-.01-.018c-.986-2.054-2.558-3.618-4.478-4.826"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFire3Outline;
