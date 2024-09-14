import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMoneyBagDollarBold = ({
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
      d="M7.816 7.106a.3.3 0 0 0 .203.152c2.605.535 5.238.543 7.843.023a.3.3 0 0 0 .214-.173l1.345-3.065a.502.502 0 0 0-.523-.698c-.422.056-1.587.202-1.904.217-1.394.082-2.658-.338-3.726-.758-1.48-.566-2.883-.347-4.18.657-.388.308-.543.443-.543.443a.5.5 0 0 0-.113.613zM12.75 17.337v.154a.75.75 0 0 1-1.5 0v-.14h-.619a.75.75 0 0 1 0-1.5h1.321c.017-.001.031-.01.048-.01s.031.009.048.01h.562a.317.317 0 0 0 .315-.32.317.317 0 0 0-.315-.32h-1.218a1.816 1.816 0 0 1-1.816-1.81c0-.954.74-1.731 1.674-1.805v-.165a.75.75 0 0 1 1.5 0v.15h.621a.75.75 0 0 1 0 1.5h-1.323c-.017.002-.031.01-.048.01s-.031-.008-.048-.01h-.56a.32.32 0 0 0-.316.32.31.31 0 0 0 .316.31h1.218a1.82 1.82 0 0 1 1.815 1.82c0 .956-.74 1.733-1.675 1.806m4.989-6.212a91 91 0 0 0-1.388-2.218.3.3 0 0 0-.313-.133c-1.341.26-2.689.398-4.038.398-1.348 0-2.694-.138-4.035-.397a.3.3 0 0 0-.312.132c-.472.734-.944 1.47-1.391 2.217-1.172 1.942-2.342 4.217-1.377 6.624 1.328 3.31 5.412 3.728 7.121 3.754 1.696-.026 5.781-.443 7.109-3.754.965-2.407-.205-4.682-1.376-6.623"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMoneyBagDollarBold;
