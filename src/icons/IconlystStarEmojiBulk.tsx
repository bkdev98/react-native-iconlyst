import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStarEmojiBulk = ({
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
      d="m16.536 7.889 4.193.595a1.761 1.761 0 0 1 .983 3.013l-3.036 2.916a.7.7 0 0 0-.214.636l.718 4.13c.077.477-.035.947-.316 1.33a1.74 1.74 0 0 1-1.158.702 1.74 1.74 0 0 1-1.098-.172l-3.755-1.954a.81.81 0 0 0-.713.004l-3.744 1.948a1.76 1.76 0 0 1-1.346.127A1.77 1.77 0 0 1 6 20.297a1.8 1.8 0 0 1-.181-1.114l.718-4.13a.72.72 0 0 0-.213-.641l-3.038-2.915a1.76 1.76 0 0 1-.047-2.482c.278-.293.65-.48 1.044-.523l4.182-.604a.77.77 0 0 0 .569-.412l1.878-3.744a1.78 1.78 0 0 1 1.053-.89 1.788 1.788 0 0 1 2.122.887l.002.003 1.876 3.747c.11.219.324.373.57.41"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.074 11.876a.95.95 0 0 1-.647.267.97.97 0 0 1-.656-.267.94.94 0 0 1-.268-.657.92.92 0 0 1 .268-.657 1 1 0 0 1 .298-.195.95.95 0 0 1 1.005.195.94.94 0 0 1 .278.657.93.93 0 0 1-.278.657m-.338 3.234c-.66.711-1.39 1.057-2.228 1.057-.847.001-1.64-.359-2.266-1.074a.77.77 0 0 1 1.159-1.014c.327.374.669.548 1.074.548.382-.009.76-.162 1.134-.565a.77.77 0 1 1 1.127 1.048m-5.082-3.891a.92.92 0 0 1 .268-.657.934.934 0 0 1 1.303 0 .94.94 0 0 1 .277.657.93.93 0 0 1-.277.657.95.95 0 0 1-.647.267.9.9 0 0 1-.36-.072.8.8 0 0 1-.296-.195.92.92 0 0 1-.268-.657"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystStarEmojiBulk;
