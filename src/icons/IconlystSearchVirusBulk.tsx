import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchVirusBulk = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M2.628 11.08a8.42 8.42 0 1 1 16.841 0 8.42 8.42 0 0 1-16.84 0"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.878 12.146v-.167c.345-.002.657.036 1.005.176a.75.75 0 0 0 .56-1.392 4 4 0 0 0-1.338-.28 2.14 2.14 0 0 0 1.217-1.586l.089-.518a.75.75 0 0 0-1.479-.253l-.089.519a.64.64 0 0 1-.393.487l-.443.173v-.403a1.957 1.957 0 0 0-3.915 0v.404l-.445-.174a.64.64 0 0 1-.393-.486l-.089-.52a.75.75 0 1 0-1.478.253l.088.518a2.14 2.14 0 0 0 1.217 1.586 4 4 0 0 0-1.338.28.75.75 0 1 0 .56 1.392c.348-.14.66-.178 1.006-.176v.166l-.116.045-.01.004a2.13 2.13 0 0 0-1.317 1.627l-.09.515a.75.75 0 1 0 1.478.259l.09-.52.002-.007a.62.62 0 0 1 .255-.405 2.56 2.56 0 0 0 2.271 1.373h.531c.985 0 1.842-.556 2.27-1.372.137.098.23.244.26.409l.084.514a.75.75 0 0 0 1.48-.242l-.085-.52-.001-.008A2.15 2.15 0 0 0 14 12.193zm-3.698-1.752a1 1 0 0 0 .103-.063c.15-.08.32-.125.5-.125h.531c.183 0 .356.046.506.128q.045.032.093.057a1.07 1.07 0 0 1 .465.898v1.183l-.001.06a1 1 0 0 0-.01.096 1.064 1.064 0 0 1-1.053.908h-.53c-.53 0-.968-.386-1.05-.892a1 1 0 0 0-.014-.128V11.27a1.06 1.06 0 0 1 .46-.877m.87-1.949a.46.46 0 0 0-.416.265 3 3 0 0 1 .15-.004h.53q.075 0 .15.004a.46.46 0 0 0-.415-.265"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="m18.924 17.979 1.984 1.979a1 1 0 1 1-1.412 1.416l-1.984-1.978a1.001 1.001 0 0 1 1.412-1.417"
    />
  </Svg>
);
export default IconlystSearchVirusBulk;
