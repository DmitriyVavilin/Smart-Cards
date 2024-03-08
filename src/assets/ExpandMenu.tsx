import { Ref, SVGProps, forwardRef, memo } from 'react'

const ExpandMenu = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    height={24}
    ref={ref}
    width={24}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <circle cx={12} cy={12} r={8.5} stroke={'#000'} />
    <g clipPath={'url(#a)'} fill={'#000'}>
      <path
        d={
          'M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0-3.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z'
        }
      />
    </g>
    <defs>
      <clipPath id={'a'}>
        <path d={'M6 6h12v12H6z'} fill={'#fff'} />
      </clipPath>
    </defs>
  </svg>
)
const ForwardRef = forwardRef(ExpandMenu)
const Memo = memo(ForwardRef)

export default Memo
