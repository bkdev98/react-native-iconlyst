import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLeftAirpodProBulk = ({
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
      d="M8.808 12.007c.395-.39.558-.876.563-1.416.005-.576.004-1.161.003-1.737l-.001-.746v-.663c0-.59.002-1.179-.002-1.768a2.8 2.8 0 0 0-.05-.51c-.15-.77-.68-1.306-1.404-1.392-1.212-.144-2.304.162-3.258.924-.497.397-.737.92-.733 1.562.009 1.216.012 2.432-.001 3.647-.008.705.268 1.249.829 1.666q1.353 1.007 3.034.866c.383-.032.738-.155 1.02-.433"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.453 3.124c1.809.835 3.013 2.191 3.48 4.15.166.698.165 1.406.106 2.118-.25 3-1.064 5.871-2.037 8.704l-.015.042c-.202.59-.406 1.18-.655 1.75-.607 1.39-2.353 2.01-3.717 1.344a2.84 2.84 0 0 1-1.583-2.73c.023-.388.136-.752.248-1.116q.044-.14.085-.28.336-1.147.679-2.29l.3-1.01c.01-.031.014-.064.02-.09q-.165-.019-.329-.035a14 14 0 0 1-.698-.083 6.8 6.8 0 0 1-2.161-.71c-.225-.12-.278-.316-.14-.531.202-.314.335-.653.382-1.023a2 2 0 0 0 .013-.158q.003-.071.002-.142V9.237c0-1.336-.001-2.672.005-4.008a2.43 2.43 0 0 0-.397-1.348 1 1 0 0 1-.06-.11c-.07-.168-.018-.33.142-.417a6.8 6.8 0 0 1 1.979-.707c1.499-.288 2.96-.165 4.351.477"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M13.125 8.454q1.126.015 2.253 0a.997.997 0 0 0 .989-1.009 1.006 1.006 0 0 0-1.023-.99h-2.19a.997.997 0 0 0-1.017.993.99.99 0 0 0 .988 1.006"
    />
  </Svg>
);
export default IconlystLeftAirpodProBulk;
