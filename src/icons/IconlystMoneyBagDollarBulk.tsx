import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMoneyBagDollarBulk = ({
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
      d="M17.739 11.124a91 91 0 0 0-1.388-2.218.3.3 0 0 0-.313-.133c-1.341.26-2.689.398-4.038.398-1.348 0-2.694-.138-4.035-.397a.3.3 0 0 0-.312.133c-.472.733-.944 1.47-1.391 2.216-1.172 1.942-2.342 4.217-1.377 6.624 1.328 3.31 5.412 3.728 7.121 3.754 1.696-.026 5.781-.443 7.109-3.754.965-2.407-.205-4.682-1.376-6.623"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.816 7.106a.3.3 0 0 0 .203.152c2.605.535 5.237.543 7.843.023a.3.3 0 0 0 .214-.173l1.345-3.065a.502.502 0 0 0-.523-.698c-.422.056-1.587.202-1.904.217-1.394.082-2.658-.338-3.726-.758-1.48-.566-2.883-.347-4.18.657-.388.308-.543.443-.543.443a.5.5 0 0 0-.113.613z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M12.75 17.492v-.154a1.814 1.814 0 0 0 1.675-1.805 1.82 1.82 0 0 0-1.815-1.82h-1.218a.31.31 0 0 1-.316-.311c0-.176.142-.32.316-.32h.56c.017.002.031.01.048.01s.031-.008.048-.01h1.323a.75.75 0 0 0 0-1.5h-.62v-.15a.75.75 0 0 0-1.5 0v.165a1.815 1.815 0 0 0-1.675 1.805c0 .998.815 1.81 1.816 1.81h1.218c.174 0 .315.144.315.32a.317.317 0 0 1-.315.32h-.562c-.017-.001-.03-.01-.048-.01-.017 0-.03.009-.048.01h-1.32a.75.75 0 0 0 0 1.5h.618v.14a.75.75 0 0 0 1.5 0"
    />
  </Svg>
);
export default IconlystMoneyBagDollarBulk;
