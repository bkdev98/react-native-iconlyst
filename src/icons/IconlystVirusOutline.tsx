import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVirusOutline = ({
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
      d="M11.67 9.484a3.22 3.22 0 0 0-3.219 3.218v2.628a3.22 3.22 0 0 0 3.218 3.22h1.161a3.22 3.22 0 0 0 3.22-3.22v-2.628a3.22 3.22 0 0 0-3.22-3.218zM6.95 12.702a4.72 4.72 0 0 1 4.718-4.718h1.161a4.72 4.72 0 0 1 4.72 4.718v2.628a4.72 4.72 0 0 1-4.72 4.72h-1.16a4.72 4.72 0 0 1-4.719-4.72z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M4.199 5.354a.75.75 0 0 1 .865.614l.193 1.136c.134.789.669 1.449 1.413 1.744h.001l2.07.81a.75.75 0 1 1-.546 1.396l-2.073-.81H6.12a3.79 3.79 0 0 1-2.341-2.889L3.585 6.22a.75.75 0 0 1 .614-.865M7.572 11.933l.186.014a.75.75 0 1 1-.112 1.496l-.123-.01c-1.38-.103-2.584-.194-3.993.372a.75.75 0 0 1-.56-1.392c1.74-.699 3.254-.583 4.602-.48M8.43 15.456a.75.75 0 0 1-.428.97l-1.33.514a2.27 2.27 0 0 0-1.41 1.735l-.001.007-.198 1.135a.75.75 0 1 1-1.478-.257l.198-1.132a3.77 3.77 0 0 1 2.336-2.882l.008-.003 1.334-.516a.75.75 0 0 1 .97.429M16.079 15.454a.75.75 0 0 1 .97-.426l1.327.517a3.82 3.82 0 0 1 2.349 2.878l.002.01.184 1.136a.75.75 0 1 1-1.481.24l-.183-1.13a2.32 2.32 0 0 0-1.426-1.74l-1.316-.514a.75.75 0 0 1-.426-.971M16.977 13.434l-.122.009a.75.75 0 0 1-.112-1.496l.186-.014c1.348-.103 2.863-.219 4.602.48a.75.75 0 0 1-.56 1.392c-1.409-.566-2.613-.475-3.994-.371M20.302 5.354a.75.75 0 0 1 .613.866l-.194 1.135a3.79 3.79 0 0 1-2.342 2.888l-.003.001-2.072.81a.75.75 0 0 1-.546-1.397l2.07-.81a2.29 2.29 0 0 0 1.414-1.743l.194-1.136a.75.75 0 0 1 .866-.614"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.25 5.629a1.89 1.89 0 0 0-1.89 1.89v1.799a.75.75 0 0 1-1.5 0V7.52a3.39 3.39 0 1 1 6.781 0v1.798a.75.75 0 0 1-1.5 0V7.52a1.89 1.89 0 0 0-1.89-1.891"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.25 8.3a.75.75 0 0 1 .75.75V19.3a.75.75 0 0 1-1.5 0V9.05a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystVirusOutline;
